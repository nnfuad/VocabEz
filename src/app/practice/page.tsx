'use client';

import React from 'react';
import Link from 'next/link';
import {
  Zap,
  Scale,
  Sparkles,
  Timer,
  ShieldAlert,
  Layers,
  BookOpen,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { Button3D } from '@/components/ui/Button3D';
import { guestStorage, UserStats } from '@/lib/guestStorage';

export default function PracticeHubPage() {
  const [stats, setStats] = React.useState<UserStats | null>(null);
  const [selectedSet, setSelectedSet] = React.useState<number | 'all'>('all');

  React.useEffect(() => {
    setStats(guestStorage.getStats());
  }, []);

  const weakCount = stats?.weakWordIds?.length || 0;

  const strategies = [
    {
      id: 'connotation_math',
      title: 'GregMAT Math Strategy',
      subtitle: 'Master +/-/0 Polarity Algebra for GRE Text Completion',
      icon: Scale,
      color: 'bg-emerald-500 border-emerald-600',
      badge: 'High Yield',
      desc: 'Classify words into Positive (+), Negative (-), or Neutral (0) charges. The foundational skill for solving hard GRE sentences algebraically.',
    },
    {
      id: 'synonym_pairing',
      title: 'Sentence Equivalence Pairing',
      subtitle: 'Hunt GRE Synonym Twins across sets',
      icon: Sparkles,
      color: 'bg-purple-500 border-purple-600',
      badge: 'SE Strategy',
      desc: 'Train rapid identification of cross-set synonym pairs (e.g., laconic & taciturn, specious & spurious, castigate & lambaste).',
    },
    {
      id: 'sentence_completion',
      title: 'GRE Sentence Completion',
      subtitle: 'Text Completion with Context Clues & Pivot Markers',
      icon: BookOpen,
      color: 'bg-blue-500 border-blue-600',
      badge: 'Context Drills',
      desc: 'Fill in the blanks using pivot indicators like although, despite, furthermore, and semicolon connectors.',
    },
    {
      id: 'speed_sprint',
      title: 'Speed Sprint Blitz',
      subtitle: '60 Seconds Rapid Active Recall',
      icon: Timer,
      color: 'bg-amber-500 border-amber-600',
      badge: 'Fluency',
      desc: 'Quick-fire rapid recognition to sharpen retrieval latency before test day.',
    },
    {
      id: 'hospital_weak',
      title: 'Weakest Words Hospital',
      subtitle: `${weakCount} words currently in triage clinic`,
      icon: ShieldAlert,
      color: 'bg-rose-500 border-rose-600',
      badge: weakCount > 0 ? `${weakCount} Critical` : 'All Healthy',
      desc: 'Zero heart penalty! Aggressively drill words with low accuracy or repeated mistakes until mastered.',
    },
    {
      id: 'spaced_repetition',
      title: 'SM-2 Spaced Repetition Due',
      subtitle: 'Cognitive retention intervals',
      icon: Layers,
      color: 'bg-cyan-500 border-cyan-600',
      badge: 'Memory Decay Prevention',
      desc: 'Adaptive review queue based on the SuperMemo-2 algorithm adapted for a 30-day timeline.',
    },
  ];

  return (
    <div className="space-y-8 select-none">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/40 text-[#1CB0F6] text-xs font-black uppercase tracking-wider mb-2">
          <Zap className="w-3.5 h-3.5" /> Practice Anything Anytime
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
          Strategy-Based Practice Hub
        </h1>
        <p className="text-sm font-semibold text-gray-500 mt-1">
          Master the words from multiple cognitive angles: Math Polarity, Synonym Twins, Context Blanks, or Targeted Error Hospital.
        </p>
      </div>

      {/* Set Filter Bar */}
      <div className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-4 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase text-gray-700 dark:text-gray-300">
            <Filter className="w-4 h-4 text-[#1CB0F6]" /> Set Scope:
          </div>
          <span className="text-xs font-bold text-gray-400">
            {selectedSet === 'all' ? 'All 27 Sets (810 Words)' : `Set ${selectedSet} (30 Words)`}
          </span>
        </div>

        {/* Scrollable Set Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedSet('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all border-b-2 ${
              selectedSet === 'all'
                ? 'bg-[#1CB0F6] text-white border-[#1482BA]'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200'
            }`}
          >
            All Sets (810)
          </button>
          {Array.from({ length: 27 }, (_, i) => i + 1).map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSet(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all border-b-2 ${
                selectedSet === s
                  ? 'bg-[#58CC02] text-white border-[#46A302]'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200'
              }`}
            >
              Set {s}
            </button>
          ))}
        </div>
      </div>

      {/* Strategy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {strategies.map((strat) => {
          const Icon = strat.icon;
          const queryParam = selectedSet === 'all' ? `strategy=${strat.id}` : `strategy=${strat.id}&set=${selectedSet}`;

          return (
            <div
              key={strat.id}
              className="bg-white dark:bg-[#202F36] border-2 border-gray-200 dark:border-gray-700/60 rounded-3xl p-5 shadow-sm hover:border-[#1CB0F6] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white border-b-4 ${strat.color}`}>
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    {strat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-gray-900 dark:text-white">
                  {strat.title}
                </h3>
                <p className="text-xs font-bold text-[#1CB0F6] mt-0.5">
                  {strat.subtitle}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed font-medium">
                  {strat.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                <Link href={`/session/${strat.id}?${queryParam}`}>
                  <Button3D variant="green" fullWidth size="md">
                    <span className="flex items-center justify-center gap-2">
                      Start Session <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </span>
                  </Button3D>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
