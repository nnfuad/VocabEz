'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  ShieldCheck,
  Volume2,
  CheckCircle2,
  Trash2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Heart,
  RotateCcw,
  Search,
  X,
  Compass,
  Zap,
} from 'lucide-react';
import enrichedVocabData from '@/data/enrichedVocab.json';
import { EnrichedVocabWord } from '@/types/vocab';
import { guestStorage, UserStats } from '@/lib/guestStorage';
import { Button3D } from '@/components/ui/Button3D';
import { sound } from '@/lib/soundEffects';

const allWords: EnrichedVocabWord[] = enrichedVocabData as EnrichedVocabWord[];
const wordsById = new Map<string, EnrichedVocabWord>();
allWords.forEach((w) => wordsById.set(w.id, w));

export default function HospitalPage() {
  const [stats, setStats] = React.useState<UserStats | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [dischargedToast, setDischargedToast] = React.useState<string | null>(null);

  React.useEffect(() => {
    setStats(guestStorage.getStats());
  }, []);

  const weakWordIds = stats?.weakWordIds || [];
  const admittedWords = weakWordIds
    .map((id) => wordsById.get(id))
    .filter((w): w is EnrichedVocabWord => !!w);

  const filteredWords = admittedWords.filter((w) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      w.word.toLowerCase().includes(q) ||
      w.primaryDefinition.toLowerCase().includes(q) ||
      (w.mnemonic && w.mnemonic.toLowerCase().includes(q))
    );
  });

  const speakWord = (word: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.9;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleDischargeWord = (wordId: string, wordName: string) => {
    sound.playClick();
    const updated = guestStorage.removeWeakWord(wordId);
    setStats(updated);
    setDischargedToast(`Discharged "${wordName}" from hospital`);
    setTimeout(() => setDischargedToast(null), 3000);
  };

  const handleDischargeAll = () => {
    if (window.confirm('Discharge all words from the hospital?')) {
      sound.playClick();
      const updated = guestStorage.clearWeakWords();
      setStats(updated);
      setDischargedToast('All words discharged from hospital');
      setTimeout(() => setDischargedToast(null), 3000);
    }
  };

  return (
    <div className="space-y-8 select-none max-w-5xl mx-auto pb-12">
      {/* Toast Notification */}
      {dischargedToast && (
        <div className="fixed top-20 right-4 z-50 bg-emerald-600 text-white text-xs font-black px-4 py-2.5 rounded-2xl shadow-lg border border-emerald-500 animate-in fade-in slide-in-from-top-2 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> {dischargedToast}
        </div>
      )}

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 rounded-3xl p-6 md:p-8 text-white shadow-sm border-b-4 border-rose-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider mb-2 backdrop-blur-sm">
              <ShieldAlert className="w-3.5 h-3.5" /> Targeted Error Triage
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight">
              Weak Words Hospital
            </h1>
            <p className="text-xs md:text-sm font-semibold opacity-90 max-w-xl mt-1.5 leading-relaxed">
              Intensive rehabilitation for missed vocabulary words. Master tricky words without pressure:
              <strong className="ml-1 underline decoration-white/60">Zero hearts lost</strong> during hospital sessions.
            </p>
          </div>

          {/* Patient Count Badge */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex flex-col items-center justify-center shrink-0 min-w-[140px] text-center">
            <span className="text-3xl font-black">{admittedWords.length}</span>
            <span className="text-[11px] font-black uppercase tracking-wider opacity-90">
              {admittedWords.length === 1 ? 'Admitted Word' : 'Admitted Words'}
            </span>
            <span className="text-[10px] font-bold text-emerald-200 mt-1 flex items-center gap-1">
              <Heart className="w-3 h-3 fill-current" /> 0 Hearts Lost
            </span>
          </div>
        </div>

        {/* Primary Action Button */}
        {admittedWords.length > 0 ? (
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link href="/session/hospital_weak" className="flex-1">
              <Button3D variant="green" fullWidth size="lg">
                <span className="flex items-center justify-center gap-2 text-base">
                  Start Hospital Triage (0 Hearts Lost) <ArrowRight className="w-5 h-5 stroke-[3]" />
                </span>
              </Button3D>
            </Link>
            <button
              onClick={handleDischargeAll}
              className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase tracking-wider transition border border-white/20 flex items-center justify-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" /> Discharge All
            </button>
          </div>
        ) : (
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link href="/dashboard" className="flex-1">
              <Button3D variant="green" fullWidth size="md">
                <span className="flex items-center justify-center gap-2">
                  <Compass className="w-4 h-4" /> Continue Daily Path
                </span>
              </Button3D>
            </Link>
            <Link href="/practice" className="flex-1">
              <Button3D variant="blue" fullWidth size="md">
                <span className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" /> Explore Practice Hub
                </span>
              </Button3D>
            </Link>
          </div>
        )}
      </div>

      {/* Hospital Ward Roster */}
      {admittedWords.length > 0 ? (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-500" /> Current Patients ({filteredWords.length})
              </h2>
              <p className="text-xs font-bold text-gray-500 mt-0.5">
                Review definitions, mnemonics, and drill directly until words are cured.
              </p>
            </div>

            {/* Quick Search Bar */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search admitted words..."
                className="w-full pl-9 pr-8 py-2 rounded-2xl text-xs font-bold bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 focus:border-[#1CB0F6] outline-none text-gray-900 dark:text-white placeholder:text-gray-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWords.map((word) => (
              <div
                key={word.id}
                className="bg-white dark:bg-[#202F36] border-2 border-rose-200 dark:border-rose-950/60 rounded-3xl p-5 shadow-sm hover:border-rose-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300">
                        Set {word.set} • #{word.number}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 italic">
                        {word.partOfSpeech}
                      </span>
                    </div>

                    {/* Audio Speaker */}
                    <button
                      onClick={() => speakWord(word.word)}
                      className="p-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition"
                      title="Listen to pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Word Name */}
                  <h3 className="text-xl font-black text-gray-900 dark:text-white capitalize">
                    {word.word}
                  </h3>

                  {/* Definition */}
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-medium mt-1.5 leading-relaxed">
                    {word.primaryDefinition}
                  </p>

                  {/* Mnemonic Pill */}
                  {word.mnemonic && (
                    <div className="mt-3 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-2 text-xs text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{word.mnemonic}</span>
                    </div>
                  )}

                  {/* Example Sentence */}
                  {word.sentence && (
                    <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400 italic">
                      "{word.sentence.replace(/\[BLANK\]/g, word.word)}"
                    </p>
                  )}
                </div>

                {/* Card Actions */}
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleDischargeWord(word.id, word.word)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-emerald-100 dark:bg-gray-800 dark:hover:bg-emerald-950/60 text-gray-600 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-300 text-xs font-black uppercase tracking-wider transition"
                    title="Mark word as cured and remove from hospital"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Discharge
                  </button>

                  <Link href={`/session/hospital_weak`}>
                    <span className="inline-flex items-center gap-1 text-xs font-black text-[#1CB0F6] hover:underline">
                      Drill Now <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Empty State: Clean Bill of Health */
        <div className="bg-white dark:bg-[#202F36] border-2 border-dashed border-gray-200 dark:border-gray-700/60 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border-b-4 border-emerald-300 dark:border-emerald-800">
            <ShieldCheck className="w-9 h-9 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">
            Clean Bill of Health!
          </h2>
          <p className="text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Zero words currently admitted. Any words you miss during daily sets, historical story quizzes, or strategy practice will be automatically admitted here for risk-free rehabilitation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/dashboard"
              className="px-5 py-3 rounded-2xl bg-[#58CC02] text-white text-xs font-black uppercase tracking-wider hover:bg-[#46A302] transition shadow-sm border-b-4 border-[#46A302]"
            >
              Learn Daily Sets
            </Link>
            <Link
              href="/practice"
              className="px-5 py-3 rounded-2xl bg-[#1CB0F6] text-white text-xs font-black uppercase tracking-wider hover:bg-[#1899D6] transition shadow-sm border-b-4 border-[#1482BA]"
            >
              Practice Hub
            </Link>
          </div>
        </div>
      )}

      {/* Hospital Triage Guide */}
      <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-6 shadow-sm">
        <h3 className="text-base font-black text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#1CB0F6]" /> How the Weak Words Hospital Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60">
            <span className="font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider text-[11px] block mb-1">
              1. Automatic Admission
            </span>
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Whenever you answer incorrectly in any set or practice drill, that word is immediately logged into the triage clinic.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60">
            <span className="font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px] block mb-1">
              2. Zero Heart Loss
            </span>
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Hospital sessions never deplete hearts. Guess without fear to explore mnemonics, roots, and nuances safely.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60">
            <span className="font-black text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px] block mb-1">
              3. Discharge on Mastery
            </span>
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Answering correctly during a hospital session cures the word and removes it from the ward, or you can discharge it manually.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
