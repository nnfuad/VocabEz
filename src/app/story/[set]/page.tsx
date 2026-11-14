'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  BookOpen,
  HelpCircle,
  Volume2,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Compass,
  ArrowRight,
  Landmark,
  GraduationCap,
  Scale,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getHistoricalStory, HistoricalStory, StoryQuizQuestion } from '@/data/historicalStories';
import enrichedVocabData from '@/data/enrichedVocab.json';
import { EnrichedVocabWord } from '@/types/vocab';
import { Button3D } from '@/components/ui/Button3D';
import { sound } from '@/lib/soundEffects';
import { guestStorage } from '@/lib/guestStorage';

const allVocabWords: EnrichedVocabWord[] = enrichedVocabData as EnrichedVocabWord[];
const vocabWordMap = new Map<string, EnrichedVocabWord>();
allVocabWords.forEach((w) => {
  vocabWordMap.set(w.word.toLowerCase(), w);
});

export default function HistoricalStoryPage() {
  const params = useParams();
  const router = useRouter();
  const setNumberRaw = params?.set;
  const setNum = typeof setNumberRaw === 'string' ? parseInt(setNumberRaw, 10) : 1;

  const story = getHistoricalStory(setNum);

  // View state: 'read' | 'quiz'
  const [activeTab, setActiveTab] = React.useState<'read' | 'quiz'>('read');
  const [selectedWord, setSelectedWord] = React.useState<EnrichedVocabWord | null>(null);

  // Quiz state
  const [quizCategory, setQuizCategory] = React.useState<'all' | 'historical_fact' | 'vocab_in_context'>('all');
  const [currentQIndex, setCurrentQIndex] = React.useState(0);
  const [selectedOptionId, setSelectedOptionId] = React.useState<string | null>(null);
  const [answerState, setAnswerState] = React.useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);

  // Filter questions based on category
  const filteredQuestions: StoryQuizQuestion[] = React.useMemo(() => {
    if (!story) return [];
    if (quizCategory === 'all') return story.questions;
    return story.questions.filter((q) => q.category === quizCategory);
  }, [story, quizCategory]);

  const currentQuestion = filteredQuestions[currentQIndex];

  // Audio pronunciation
  const speakWord = (word: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.9;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleWordClick = (wordClean: string) => {
    const vocabEntry = vocabWordMap.get(wordClean.toLowerCase());
    if (vocabEntry) {
      sound.playClick();
      setSelectedWord(vocabEntry);
    }
  };

  const handleSelectOption = (optionId: string) => {
    if (answerState !== 'idle' || !currentQuestion) return;
    setSelectedOptionId(optionId);
    sound.playClick();

    const isCorrect = currentQuestion.options.find((o) => o.id === optionId)?.isCorrect;
    if (isCorrect) {
      sound.playCorrect();
      setAnswerState('correct');
      setScore((prev) => prev + 1);
    } else {
      sound.playIncorrect();
      setAnswerState('incorrect');
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < filteredQuestions.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setAnswerState('idle');
    } else {
      // Quiz complete
      setQuizFinished(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      sound.playVictory();

      // Award XP
      const earnedXp = score * 15;
      const stats = guestStorage.getStats();
      stats.xp += earnedXp;
      guestStorage.saveStats(stats);
    }
  };

  const restartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOptionId(null);
    setAnswerState('idle');
    setScore(0);
    setQuizFinished(false);
  };

  if (!story || (setNum !== 1 && setNum !== 2)) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center select-none space-y-4">
        <h1 className="text-2xl font-black text-gray-900 dark:text-white">Story Not Found</h1>
        <p className="text-sm text-gray-500">
          Historical stories are currently available exclusively for Set 1 and Set 2.
        </p>
        <div className="flex justify-center gap-3 pt-4">
          <Link
            href="/story/1"
            className="px-4 py-2 rounded-2xl bg-[#58CC02] text-white text-xs font-black uppercase tracking-wider"
          >
            Explore Set 1 Story
          </Link>
          <Link
            href="/story/2"
            className="px-4 py-2 rounded-2xl bg-[#1CB0F6] text-white text-xs font-black uppercase tracking-wider"
          >
            Explore Set 2 Story
          </Link>
        </div>
      </div>
    );
  }

  // Render highlighted text with clickable vocabulary spans
  const renderParagraphWithHighlights = (paragraphText: string, targetWords: string[]) => {
    // Build regex to match any of the 30 words in this set
    const allSetWordsRegex = new RegExp(`\\b(${story.allTargetWords.join('|')})\\b`, 'gi');

    const parts = paragraphText.split(allSetWordsRegex);
    return parts.map((part, index) => {
      const matchWord = story.allTargetWords.find((w) => w.toLowerCase() === part.toLowerCase());
      if (matchWord) {
        const isCurrentParagraphWord = targetWords.some((tw) => tw.toLowerCase() === matchWord.toLowerCase());
        return (
          <span
            key={index}
            onClick={() => handleWordClick(matchWord)}
            className={`cursor-pointer px-1.5 py-0.5 rounded-lg font-black transition-all mx-0.5 inline-block ${
              isCurrentParagraphWord
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/80 hover:scale-105 shadow-sm'
                : 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-300 dark:border-sky-700/80 hover:scale-105'
            }`}
            title="Click to view definition, mnemonic & pronunciation"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 select-none pb-12">
      {/* Top Breadcrumb & Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          href="/practice"
          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Practice Hub
        </Link>

        {/* Set 1 vs Set 2 Quick Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-[#202F36] rounded-2xl border-2 border-gray-200 dark:border-gray-700/60 text-xs font-black">
          <Link
            href="/story/1"
            className={`px-3 py-1.5 rounded-xl transition ${
              setNum === 1
                ? 'bg-[#58CC02] text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Set 1: Rome (44 BCE)
          </Link>
          <Link
            href="/story/2"
            className={`px-3 py-1.5 rounded-xl transition ${
              setNum === 2
                ? 'bg-[#1CB0F6] text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Set 2: Galileo (1610)
          </Link>
        </div>
      </div>

      {/* Hero Header Card */}
      <div
        className={`rounded-3xl p-6 text-white border-b-4 shadow-sm ${
          setNum === 1
            ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 border-emerald-800'
            : 'bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 border-sky-800'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-widest backdrop-blur-sm">
            {story.heroBadge}
          </span>
          <span className="text-xs font-bold opacity-90">
            {story.historicalPeriod} • ~{story.readTimeMinutes} min read
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-black tracking-tight mt-2">{story.title}</h1>
        <p className="text-sm font-semibold opacity-90 mt-2">{story.subtitle}</p>

        {/* Mode Tabs: Read vs Quiz */}
        <div className="mt-6 flex items-center gap-2 pt-2 border-t border-white/20">
          <button
            onClick={() => setActiveTab('read')}
            className={`flex-1 py-2.5 rounded-2xl text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition ${
              activeTab === 'read'
                ? 'bg-white text-gray-900 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <BookOpen className="w-4 h-4" /> 1. Read Historical Narrative
          </button>
          <button
            onClick={() => {
              setActiveTab('quiz');
              restartQuiz();
            }}
            className={`flex-1 py-2.5 rounded-2xl text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition ${
              activeTab === 'quiz'
                ? 'bg-white text-gray-900 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <HelpCircle className="w-4 h-4" /> 2. Practice Story Quizzes (20 Qs)
          </button>
        </div>
      </div>

      {/* TAB 1: READ HISTORICAL STORY */}
      {activeTab === 'read' && (
        <div className="space-y-6">
          {/* Key Figures Accordion / Cards */}
          <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-gray-700 dark:text-gray-200">
              <Landmark className="w-4 h-4 text-[#58CC02]" /> Key Historical Dramatis Personae:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {story.keyFigures.map((fig, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/40"
                >
                  <p className="font-black text-gray-900 dark:text-white">{fig.name}</p>
                  <p className="text-gray-500 text-[11px] font-semibold mt-0.5">{fig.role}</p>
                </div>
              ))}
            </div>
            <div className="pt-2 text-[11px] font-bold text-gray-400">
              💡 <span className="text-gray-600 dark:text-gray-300 font-extrabold">Tip:</span> Every target word is highlighted. Tap any word to view its definition, mnemonic, and audio pronunciation.
            </div>
          </div>

          {/* Story Paragraphs */}
          <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            {story.paragraphs.map((p) => (
              <div key={p.id} className="space-y-2 border-b border-gray-100 dark:border-gray-700/40 pb-5 last:border-b-0 last:pb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#58CC02] dark:text-[#58CC02]">
                  Chapter {p.id} • {p.subtitle}
                </span>
                <p className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                  {renderParagraphWithHighlights(p.text, p.targetWords)}
                </p>
              </div>
            ))}
          </div>

          {/* Call to action at bottom of story */}
          <div className="rounded-3xl bg-gray-100 dark:bg-gray-800/80 p-6 text-center space-y-3">
            <h3 className="text-lg font-black text-gray-900 dark:text-white">
              Ready to test your memory of the story and vocabulary?
            </h3>
            <p className="text-xs font-semibold text-gray-500 max-w-md mx-auto">
              Test both historical knowledge and GRE contextual definitions across 20 interactive quiz questions.
            </p>
            <Button3D
              variant="green"
              size="lg"
              onClick={() => {
                setActiveTab('quiz');
                restartQuiz();
              }}
            >
              Start Story Quizzes Now <ArrowRight className="w-5 h-5 ml-1" />
            </Button3D>
          </div>
        </div>
      )}

      {/* TAB 2: STORY QUIZZES */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-between gap-2 bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-2xl p-2">
            <div className="flex items-center gap-1 text-xs font-black">
              <button
                onClick={() => {
                  setQuizCategory('all');
                  restartQuiz();
                }}
                className={`px-3 py-1.5 rounded-xl transition ${
                  quizCategory === 'all'
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                All (20)
              </button>
              <button
                onClick={() => {
                  setQuizCategory('historical_fact');
                  restartQuiz();
                }}
                className={`px-3 py-1.5 rounded-xl transition ${
                  quizCategory === 'historical_fact'
                    ? 'bg-[#1CB0F6] text-white'
                    : 'text-gray-500 hover:text-[#1CB0F6]'
                }`}
              >
                Historical Facts (10)
              </button>
              <button
                onClick={() => {
                  setQuizCategory('vocab_in_context');
                  restartQuiz();
                }}
                className={`px-3 py-1.5 rounded-xl transition ${
                  quizCategory === 'vocab_in_context'
                    ? 'bg-[#CE82FF] text-white'
                    : 'text-gray-500 hover:text-[#CE82FF]'
                }`}
              >
                Vocab in Context (10)
              </button>
            </div>

            <span className="text-xs font-bold text-gray-400 pr-2">
              Score: <span className="text-[#58CC02] font-black">{score}</span> / {filteredQuestions.length}
            </span>
          </div>

          {/* ACTIVE QUIZ RUNNER */}
          {!quizFinished && currentQuestion && (
            <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
              {/* Question Header & Progress Bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-black uppercase text-gray-400 mb-2">
                  <span>
                    Question {currentQIndex + 1} of {filteredQuestions.length}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      currentQuestion.category === 'historical_fact'
                        ? 'bg-sky-100 text-[#1CB0F6] dark:bg-sky-950/40'
                        : 'bg-purple-100 text-[#CE82FF] dark:bg-purple-950/40'
                    }`}
                  >
                    {currentQuestion.category === 'historical_fact' ? 'Historical Fact' : 'Vocab in Context'}
                  </span>
                </div>

                {/* Progress track */}
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#58CC02] transition-all duration-300"
                    style={{ width: `${((currentQIndex + 1) / filteredQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Prompt */}
              <div className="space-y-1">
                <h2 className="text-lg md:text-xl font-black text-gray-900 dark:text-white leading-snug">
                  {currentQuestion.prompt}
                </h2>
                {currentQuestion.targetWord && (
                  <p className="text-xs font-bold text-[#58CC02]">
                    Target Word: <span className="underline uppercase">{currentQuestion.targetWord}</span>
                  </p>
                )}
              </div>

              {/* Options List */}
              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedOptionId === option.id;
                  const isCorrect = option.isCorrect;

                  let optionStyle =
                    'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:border-gray-400';

                  if (answerState !== 'idle') {
                    if (isCorrect) {
                      optionStyle = 'border-[#58CC02] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-black';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'border-[#FF4B4B] bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 font-bold';
                    } else {
                      optionStyle = 'opacity-40 border-gray-200 dark:border-gray-700 text-gray-400';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-[#1CB0F6] bg-sky-50 dark:bg-sky-950/40 text-[#1CB0F6]';
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      disabled={answerState !== 'idle'}
                      className={`w-full p-4 rounded-2xl border-2 text-left text-sm font-bold transition-all flex items-start gap-3 ${optionStyle}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-black uppercase text-gray-500 shrink-0 mt-0.5">
                        {option.id}
                      </span>
                      <span className="flex-1">{option.text}</span>
                      {answerState !== 'idle' && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-[#58CC02] shrink-0" />
                      )}
                      {answerState !== 'idle' && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-[#FF4B4B] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Sheet & Explanation */}
              {answerState !== 'idle' && (
                <div
                  className={`p-4 rounded-2xl border space-y-2 ${
                    answerState === 'correct'
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase">
                    {answerState === 'correct' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#58CC02]" /> Correct!
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-[#FF4B4B]" /> Incorrect
                      </>
                    )}
                  </div>
                  <p className="text-xs font-semibold leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                  <div className="pt-2">
                    <Button3D variant={answerState === 'correct' ? 'green' : 'blue'} fullWidth onClick={handleNextQuestion}>
                      {currentQIndex + 1 < filteredQuestions.length ? 'Next Question' : 'View Results'}
                    </Button3D>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* QUIZ COMPLETION SUMMARY */}
          {quizFinished && (
            <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-8 shadow-sm text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border-4 border-[#58CC02] flex items-center justify-center mx-auto text-[#58CC02]">
                <Trophy className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#58CC02]">
                  Story Quiz Mastered!
                </span>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mt-1">
                  {score >= filteredQuestions.length * 0.8 ? 'Outstanding Mastery!' : 'Well Done!'}
                </h2>
                <p className="text-xs font-bold text-gray-500 mt-1">
                  You scored {score} out of {filteredQuestions.length} ({Math.round((score / filteredQuestions.length) * 100)}%)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <span className="text-[10px] font-black uppercase text-gray-400">Total Score</span>
                  <p className="text-2xl font-black text-[#58CC02]">{score}/{filteredQuestions.length}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <span className="text-[10px] font-black uppercase text-gray-400">XP Earned</span>
                  <p className="text-2xl font-black text-[#FF9600]">+{score * 15} XP</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Button3D variant="green" onClick={restartQuiz}>
                  <RotateCcw className="w-4 h-4 mr-1.5" /> Retry Quiz
                </Button3D>
                <Button3D variant="gray" onClick={() => setActiveTab('read')}>
                  <BookOpen className="w-4 h-4 mr-1.5" /> Re-read Story
                </Button3D>
                <Link
                  href={setNum === 1 ? '/story/2' : '/practice'}
                  className="px-5 py-3 rounded-2xl bg-[#1CB0F6] text-white text-xs font-black uppercase tracking-wider hover:bg-[#1899D6] transition"
                >
                  {setNum === 1 ? 'Go to Set 2 Story' : 'Back to Practice Hub'}
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* INTERACTIVE VOCABULARY MODAL / POPUP */}
      {selectedWord && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 relative animate-pop">
            {/* Close button */}
            <button
              onClick={() => setSelectedWord(null)}
              className="absolute right-4 top-4 p-1.5 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Word Header */}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">{selectedWord.word}</h3>
                <button
                  onClick={() => speakWord(selectedWord.word)}
                  className="p-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-[#1CB0F6] hover:scale-105 transition"
                  title="Listen to pronunciation"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-black uppercase text-gray-400">
                  Set {selectedWord.set} • #{selectedWord.number} • {selectedWord.partOfSpeech}
                </span>
                <span
                  className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                    selectedWord.connotation === 'positive'
                      ? 'bg-emerald-100 text-[#58CC02]'
                      : selectedWord.connotation === 'negative'
                      ? 'bg-rose-100 text-[#FF4B4B]'
                      : 'bg-sky-100 text-[#1CB0F6]'
                  }`}
                >
                  {selectedWord.connotation}
                </span>
              </div>
            </div>

            {/* Primary Definition */}
            <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50">
              <span className="text-[10px] font-black uppercase text-gray-400">Definition</span>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-0.5">
                {selectedWord.primaryDefinition}
              </p>
            </div>

            {/* Mnemonic */}
            {selectedWord.mnemonic && (
              <div className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                <span className="text-[#FF9600] font-black">💡 Mnemonic:</span> {selectedWord.mnemonic}
              </div>
            )}

            {/* Sentence */}
            {selectedWord.sentence && (
              <div className="text-xs text-gray-500 italic">
                "{selectedWord.sentence}"
              </div>
            )}

            <div className="pt-2">
              <Button3D variant="green" fullWidth onClick={() => setSelectedWord(null)}>
                Got It
              </Button3D>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
