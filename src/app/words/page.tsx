'use client';

import React from 'react';
import { Search, Volume2, Sparkles, Filter, BookOpen } from 'lucide-react';
import enrichedVocabData from '@/data/enrichedVocab.json';
import { EnrichedVocabWord, Connotation } from '@/types/vocab';

const words: EnrichedVocabWord[] = enrichedVocabData as EnrichedVocabWord[];

export default function WordsDirectoryPage() {
  const [search, setSearch] = React.useState('');
  const [selectedSet, setSelectedSet] = React.useState<number | 'all'>('all');
  const [selectedConnotation, setSelectedConnotation] = React.useState<Connotation | 'all'>('all');

  const filtered = words.filter((w) => {
    const matchesSearch =
      w.word.toLowerCase().includes(search.toLowerCase()) ||
      w.definition.toLowerCase().includes(search.toLowerCase());
    const matchesSet = selectedSet === 'all' || w.set === selectedSet;
    const matchesConnotation =
      selectedConnotation === 'all' || w.connotation === selectedConnotation;

    return matchesSearch && matchesSet && matchesConnotation;
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

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-[#58CC02] text-xs font-black uppercase tracking-wider mb-2">
          <BookOpen className="w-3.5 h-3.5" /> 810 GregMAT Vocabulary Catalog
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
          All 27 Sets Dictionary
        </h1>
        <p className="text-sm font-semibold text-gray-500 mt-1">
          Explore complete definitions, mnemonics, roots, and GregMAT Math Strategy connotations (+ / - / 0).
        </p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-4 shadow-sm space-y-3">
        {/* Search input */}
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search words or definitions (e.g. loquacious, strict, placate)..."
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm font-bold text-gray-900 dark:text-white focus:outline-none focus:border-[#1CB0F6]"
          />
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs font-black">
          {/* Connotation selector */}
          <div className="flex items-center gap-1">
            <span className="text-gray-400 mr-1">Polarity:</span>
            <button
              onClick={() => setSelectedConnotation('all')}
              className={`px-2.5 py-1 rounded-xl transition-all ${
                selectedConnotation === 'all'
                  ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedConnotation('positive')}
              className={`px-2.5 py-1 rounded-xl transition-all ${
                selectedConnotation === 'positive'
                  ? 'bg-[#58CC02] text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-[#58CC02]'
              }`}
            >
              + Positive
            </button>
            <button
              onClick={() => setSelectedConnotation('negative')}
              className={`px-2.5 py-1 rounded-xl transition-all ${
                selectedConnotation === 'negative'
                  ? 'bg-[#FF4B4B] text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-[#FF4B4B]'
              }`}
            >
              - Negative
            </button>
            <button
              onClick={() => setSelectedConnotation('neutral')}
              className={`px-2.5 py-1 rounded-xl transition-all ${
                selectedConnotation === 'neutral'
                  ? 'bg-[#1CB0F6] text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-[#1CB0F6]'
              }`}
            >
              0 Neutral
            </button>
          </div>

          <span className="text-gray-400">
            Showing {filtered.length} of 810 words
          </span>
        </div>
      </div>

      {/* Words Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.slice(0, 80).map((w) => (
          <div
            key={w.id}
            className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-5 shadow-sm space-y-3 hover:border-[#1CB0F6] transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">
                    {w.word}
                  </h3>
                  <button
                    onClick={() => speakWord(w.word)}
                    className="p-1 rounded-lg text-gray-400 hover:text-[#1CB0F6] hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[11px] font-black uppercase text-gray-400">
                    Set {w.set} • #{w.number}
                  </span>
                  <span className="text-[11px] font-black text-gray-300">•</span>
                  <span className="text-[11px] font-black uppercase text-gray-400">
                    {w.partOfSpeech}
                  </span>
                </div>
              </div>

              {/* Connotation Badge */}
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  w.connotation === 'positive'
                    ? 'bg-emerald-100 dark:bg-emerald-950/40 text-[#58CC02]'
                    : w.connotation === 'negative'
                    ? 'bg-rose-100 dark:bg-rose-950/40 text-[#FF4B4B]'
                    : 'bg-sky-100 dark:bg-sky-950/40 text-[#1CB0F6]'
                }`}
              >
                {w.connotation === 'positive' ? '+ Positive' : w.connotation === 'negative' ? '- Negative' : '0 Neutral'}
              </span>
            </div>

            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 leading-snug">
              {w.definition}
            </p>

            <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-3 space-y-1 text-xs">
              <p className="font-bold text-gray-600 dark:text-gray-300">
                💡 <span className="text-gray-400">Mnemonic:</span> {w.mnemonic}
              </p>
              {w.root && (
                <p className="font-bold text-gray-500">
                  🌱 <span className="text-gray-400">Root:</span> {w.root}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length > 80 && (
        <p className="text-center text-xs font-bold text-gray-400 py-4">
          Showing top 80 matches. Refine your search query to see specific words!
        </p>
      )}
    </div>
  );
}
