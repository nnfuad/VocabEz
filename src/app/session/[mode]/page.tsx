'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  X,
  Heart,
  Flame,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  Volume2,
  ShieldAlert,
  RotateCcw,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '@/lib/soundEffects';
import { guestStorage, UserStats } from '@/lib/guestStorage';
import { createClient } from '@/utils/supabase/client';
import {
  generateSessionQuestions,
  QuestionItem,
  QuestionOption,
} from '@/lib/questionEngine';
import { PracticeStrategy } from '@/types/vocab';
import { Button3D } from '@/components/ui/Button3D';

export default function SessionRunnerPage({
  params,
}: {
  params: Promise<{ mode: string }>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Route parameters
  const [mode, setMode] = React.useState<string>('set_quiz');
  const [questions, setQuestions] = React.useState<QuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedOptionId, setSelectedOptionId] = React.useState<string | null>(null);
  const [answerState, setAnswerState] = React.useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [stats, setStats] = React.useState<UserStats | null>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  // Session tallies
  const [correctCount, setCorrectCount] = React.useState(0);
  const [incorrectCount, setIncorrectCount] = React.useState(0);
  const [earnedXp, setEarnedXp] = React.useState(0);
  const [combo, setCombo] = React.useState(0);
  const [missedWordIds, setMissedWordIds] = React.useState<string[]>([]);
  const [reviewedWordIds, setReviewedWordIds] = React.useState<string[]>([]);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [showQuitModal, setShowQuitModal] = React.useState(false);
  const [outOfHearts, setOutOfHearts] = React.useState(false);

  React.useEffect(() => {
    params.then((p) => {
      setMode(p.mode);
      const setParam = searchParams.get('set');
      const setNum = setParam ? parseInt(setParam, 10) : undefined;
      const strategy = (p.mode as PracticeStrategy) || 'set_quiz';

      const currentStats = guestStorage.getStats();
      setStats(currentStats);

      const supabase = createClient();
      supabase.auth.getUser().then(({ data }) => {
        setIsLoggedIn(!!data.user);
      });

      const qs = generateSessionQuestions({
        strategy,
        setNumber: setNum,
        count: 10,
        weakWordIds: currentStats.weakWordIds,
      });

      setQuestions(qs);
    });
  }, [params, searchParams]);

  const currentQ = questions[currentIndex];
  const progressPercent = questions.length > 0 ? (currentIndex / questions.length) * 100 : 0;

  // Text to speech for pronunciation
  const speakWord = (word: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.9;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectOption = (optionId: string) => {
    if (answerState !== 'idle') return;
    sound.playClick();
    setSelectedOptionId(optionId);
  };

  const handleCheckAnswer = () => {
    if (!currentQ || !selectedOptionId || answerState !== 'idle') return;

    const chosenOption = currentQ.options?.find((o) => o.id === selectedOptionId);
    const isCorrect = chosenOption ? chosenOption.isCorrect : false;

    // Track words reviewed
    if (!reviewedWordIds.includes(currentQ.targetWord.id)) {
      setReviewedWordIds((prev) => [...prev, currentQ.targetWord.id]);
    }

    if (isCorrect) {
      // Correct!
      const newCombo = combo + 1;
      setCombo(newCombo);
      sound.playCorrect();
      if (newCombo >= 3) {
        sound.playCombo(newCombo);
      }
      setAnswerState('correct');
      setCorrectCount((prev) => prev + 1);
      const itemXp = 10 + (newCombo >= 3 ? 5 : 0);
      setEarnedXp((prev) => prev + itemXp);
    } else {
      // Incorrect!
      setCombo(0);
      sound.playIncorrect();
      setAnswerState('incorrect');
      setIncorrectCount((prev) => prev + 1);
      setMissedWordIds((prev) => Array.from(new Set([...prev, currentQ.targetWord.id])));

      // Dock heart only in non-hospital modes
      if (mode !== 'hospital_weak') {
        const updatedStats = guestStorage.decrementHeart();
        setStats(updatedStats);
        if (updatedStats.hearts <= 0) {
          setOutOfHearts(true);
        }
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setAnswerState('idle');
    } else {
      // Completed session!
      finishSession();
    }
  };

  const finishSession = () => {
    setIsCompleted(true);
    sound.playVictory();

    // Trigger celebratory confetti
    if (typeof window !== 'undefined') {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Fallback
      }
    }

    // Save progress to guest storage & cloud sync
    const setParam = searchParams.get('set');
    const setNum = setParam ? parseInt(setParam, 10) : undefined;

    guestStorage.recordSessionComplete({
      earnedXp: earnedXp + (incorrectCount === 0 ? 25 : 0),
      correctCount,
      incorrectCount,
      setNumber: setNum,
      reviewedWordIds,
      missedWordIds,
    });
  };

  // Keyboard shortcut listener (1-4 keys and Enter)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (answerState === 'idle' && currentQ?.options) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          if (currentQ.options[idx]) {
            handleSelectOption(currentQ.options[idx].id);
          }
        } else if (e.key === 'Enter' && selectedOptionId) {
          handleCheckAnswer();
        }
      } else if (answerState !== 'idle' && e.key === 'Enter') {
        handleNextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [answerState, currentQ, selectedOptionId]);

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 select-none">
        <div className="w-16 h-16 rounded-full border-4 border-[#1CB0F6] border-t-transparent animate-spin mb-4" />
        <h2 className="text-xl font-black text-gray-800 dark:text-white">
          Preparing Vocab Session...
        </h2>
        <p className="text-xs text-gray-400 mt-1">Loading GregMAT question permutations</p>
      </div>
    );
  }

  // Session Completed Screen
  if (isCompleted) {
    const accuracy = Math.round((correctCount / questions.length) * 100);
    const totalBonusXp = earnedXp + (incorrectCount === 0 ? 25 : 0);

    return (
      <div className="max-w-md mx-auto text-center py-8 px-4 space-y-6 select-none animate-in fade-in zoom-in-95 duration-200">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 border-4 border-yellow-500 flex items-center justify-center text-white shadow-xl">
          <Trophy className="w-12 h-12 stroke-[2.5]" />
        </div>

        <div>
          <span className="text-xs font-black uppercase tracking-widest text-[#58CC02]">
            Session Completed!
          </span>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mt-1">
            {accuracy >= 80 ? 'Outstanding Work!' : 'Good Effort!'}
          </h1>
          <p className="text-xs font-bold text-gray-500 mt-1">
            Keep practicing daily to master all 810 words in 30 days!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700">
            <span className="text-[10px] font-black uppercase text-gray-400">Total XP</span>
            <p className="text-2xl font-black text-[#FF9600]">+{totalBonusXp}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700">
            <span className="text-[10px] font-black uppercase text-gray-400">Accuracy</span>
            <p className="text-2xl font-black text-[#58CC02]">{accuracy}%</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700">
            <span className="text-[10px] font-black uppercase text-gray-400">Combo Max</span>
            <p className="text-2xl font-black text-[#1CB0F6]">{combo || correctCount}</p>
          </div>
        </div>

        {/* Missed words list review if any */}
        {missedWordIds.length > 0 && (
          <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 rounded-2xl p-4 text-left">
            <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 text-xs font-black uppercase mb-2">
              <ShieldAlert className="w-4 h-4" /> Sent to Weak Words Hospital:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {missedWordIds.map((id) => {
                const word = currentQ.targetWord.id === id ? currentQ.targetWord.word : id;
                return (
                  <span
                    key={id}
                    className="px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Guest Warning if not logged in */}
        {!isLoggedIn && (
          <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700/60 rounded-2xl p-4 text-left flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
              !
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-black text-amber-900 dark:text-amber-200">
                Playing as Guest
              </h4>
              <p className="text-xs text-amber-800 dark:text-amber-300 mt-0.5">
                Your +{totalBonusXp} XP and streak are currently stored only in this browser session. If cache is wiped, incognito closes, or you switch devices, your progress will be lost!
              </p>
              <div className="mt-3 flex items-center gap-2">
                <Link
                  href="/signup"
                  className="inline-block px-3.5 py-1.5 bg-[#58CC02] hover:bg-[#46A302] text-white text-xs font-black rounded-xl uppercase tracking-wider shadow-sm transition-transform active:scale-95"
                >
                  Save Progress to Cloud
                </Link>
                <Link
                  href="/login"
                  className="inline-block px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-xs font-bold rounded-xl hover:bg-gray-50"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3 pt-4">
          <Button3D
            variant="green"
            fullWidth
            size="lg"
            onClick={() => router.push('/dashboard')}
          >
            Continue Learning
          </Button3D>

          <Button3D
            variant="gray"
            fullWidth
            size="md"
            onClick={() => router.push('/practice')}
          >
            Practice More Strategies
          </Button3D>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col min-h-[82vh] justify-between select-none">
      {/* Session Header */}
      <div>
        <div className="flex items-center justify-between gap-4 py-2">
          {/* Quit button */}
          <button
            onClick={() => setShowQuitModal(true)}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Animated Emerald Progress Bar */}
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-3.5 rounded-full overflow-hidden p-0.5">
            <div
              className="bg-[#58CC02] h-full rounded-full transition-all duration-300 shadow-sm"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Combo Indicator */}
          {combo >= 2 && (
            <div className="flex items-center gap-1 text-xs font-black text-[#FF9600] animate-bounce-subtle">
              <Flame className="w-4 h-4 fill-current" />
              <span>x{combo}</span>
            </div>
          )}

          {/* Hearts counter */}
          <div className="flex items-center gap-1.5 text-xs font-black text-[#FF4B4B]">
            <Heart className="w-5 h-5 fill-current animate-pulse" />
            <span>{stats?.hearts ?? 5}</span>
          </div>
        </div>
      </div>

      {/* Main Question Body */}
      <div className="my-auto py-6 space-y-6">
        {/* Prompt Card */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-gray-400">
              {currentQ.subPrompt || 'Question'}
            </span>
            <button
              onClick={() => speakWord(currentQ.targetWord.word)}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#1CB0F6] hover:underline"
            >
              <Volume2 className="w-4 h-4" /> Pronounce
            </button>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-tight">
            {currentQ.prompt}
          </h2>

          <div className="flex items-center gap-2 pt-1">
            <span className="px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-[11px] font-black uppercase text-gray-500">
              Set {currentQ.targetWord.set} • #{currentQ.targetWord.number}
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-[11px] font-black uppercase text-gray-500">
              {currentQ.targetWord.partOfSpeech}
            </span>
          </div>
        </div>

        {/* Multiple Choice Options Grid */}
        {currentQ.options && (
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOptionId === option.id;
              const hotkey = idx + 1;

              let style = 'bg-white dark:bg-[#202F36] border-2 border-b-4 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100';

              if (isSelected && answerState === 'idle') {
                style = 'bg-sky-50 dark:bg-sky-950/40 border-2 border-b-4 border-[#1CB0F6] text-[#1CB0F6]';
              } else if (answerState === 'correct' && option.isCorrect) {
                style = 'bg-emerald-50 dark:bg-emerald-950/40 border-2 border-b-4 border-[#58CC02] text-[#58CC02]';
              } else if (answerState === 'incorrect' && isSelected) {
                style = 'bg-rose-50 dark:bg-rose-950/40 border-2 border-b-4 border-[#FF4B4B] text-[#FF4B4B] animate-shake';
              } else if (answerState === 'incorrect' && option.isCorrect) {
                style = 'bg-emerald-50 dark:bg-emerald-950/40 border-2 border-b-4 border-[#58CC02] text-[#58CC02]';
              }

              return (
                <button
                  key={option.id}
                  disabled={answerState !== 'idle'}
                  onClick={() => handleSelectOption(option.id)}
                  className={`w-full p-4 rounded-2xl flex items-center justify-between text-left transition-all active:translate-y-0.5 ${style}`}
                >
                  <span className="text-sm md:text-base font-extrabold pr-4 leading-snug">
                    {option.text}
                  </span>
                  <span className="w-6 h-6 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center text-xs font-black text-gray-400 shrink-0">
                    {hotkey}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Sticky Bottom Action Sheet */}
      <div className="pt-4 border-t-2 border-gray-100 dark:border-gray-800">
        {answerState === 'idle' ? (
          <Button3D
            variant="green"
            fullWidth
            size="lg"
            disabled={!selectedOptionId}
            onClick={handleCheckAnswer}
          >
            Check Answer
          </Button3D>
        ) : answerState === 'correct' ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#58CC02]">
              <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
              <div>
                <p className="font-black text-lg">Nicely Done!</p>
                <p className="text-xs font-bold opacity-90">
                  {currentQ.mnemonic || 'Great recall!'}
                </p>
              </div>
            </div>
            <Button3D variant="green" fullWidth size="lg" onClick={handleNextQuestion}>
              Continue
            </Button3D>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-[#FF4B4B]">
              <XCircle className="w-7 h-7 stroke-[2.5] shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-lg">Correct Solution:</p>
                <p className="text-sm font-extrabold text-gray-800 dark:text-gray-100 mt-0.5">
                  {currentQ.correctAnswerText}
                </p>
                <p className="text-xs font-bold text-gray-500 mt-1">
                  💡 Mnemonic: {currentQ.mnemonic}
                </p>
              </div>
            </div>
            <Button3D variant="red" fullWidth size="lg" onClick={handleNextQuestion}>
              Got It
            </Button3D>
          </div>
        )}
      </div>

      {/* Out of Hearts Modal */}
      {outOfHearts && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-3xl p-6 max-w-sm w-full text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-100 text-[#FF4B4B] mx-auto flex items-center justify-center">
              <Heart className="w-8 h-8 fill-current animate-bounce" />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white">
              You Ran Out of Hearts!
            </h3>
            <p className="text-xs font-bold text-gray-500">
              Hearts regenerate 1 every 30 minutes, or you can instantly refill all 5 hearts for 50 gems.
            </p>
            <div className="space-y-2 pt-2">
              <Button3D
                variant="blue"
                fullWidth
                size="md"
                onClick={() => {
                  const refilled = guestStorage.refillHeartsWithGems();
                  if (refilled) {
                    setOutOfHearts(false);
                    setStats(guestStorage.getStats());
                  } else {
                    router.push('/practice?strategy=hospital_weak');
                  }
                }}
              >
                Refill 5 Hearts (50 Gems)
              </Button3D>
              <Button3D
                variant="gray"
                fullWidth
                size="md"
                onClick={() => router.push('/dashboard')}
              >
                Quit for Now
              </Button3D>
            </div>
          </div>
        </div>
      )}

      {/* Quit Confirmation Modal */}
      {showQuitModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-3xl p-6 max-w-sm w-full text-center space-y-4">
            <h3 className="text-xl font-black text-gray-900 dark:text-white">
              Quit Lesson?
            </h3>
            <p className="text-xs font-bold text-gray-500">
              You will lose your session progress and combo streak if you quit now!
            </p>
            <div className="flex gap-2 pt-2">
              <Button3D
                variant="gray"
                fullWidth
                size="md"
                onClick={() => setShowQuitModal(false)}
              >
                Keep Learning
              </Button3D>
              <Button3D
                variant="red"
                fullWidth
                size="md"
                onClick={() => router.push('/dashboard')}
              >
                Quit
              </Button3D>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
