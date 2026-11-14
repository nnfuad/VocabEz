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

      {/* Historical Story Drills Banner (Sets 1 & 2 Exclusives) */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-5 md:p-6 text-white shadow-sm border-b-4 border-amber-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider mb-1.5 backdrop-blur-sm">
              <BookOpen className="w-3.5 h-3.5" /> Story-Based Learning
            </div>
            <h2 className="text-xl md:text-2xl font-black">
              Historical Narrative Drills & Quizzes
            </h2>
            <p className="text-xs md:text-sm font-semibold opacity-90 max-w-xl mt-1">
              Read dramatic, historically authentic narratives that weave in all 30 words per set, then test your comprehension on both historical facts and vocabulary in context!
            </p>
          </div>
          <span className="text-xs font-extrabold px-3 py-1.5 rounded-full bg-white/20 shrink-0 self-start md:self-auto">
            Sets 1 & 2 Exclusives
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {/* Set 1 Story Card */}
          <Link
            href="/story/1"
            className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200">
                Set 1 • Ancient Rome (44 BCE)
              </span>
              <h3 className="text-base font-black text-white group-hover:underline mt-0.5">
                The Twilight of the Republic: Cicero, Caesar, & the Ides of March
              </h3>
              <p className="text-xs text-white/80 line-clamp-2 mt-1">
                Experience the betrayal, stoic philosophy, and fall of Roman democracy with all 30 Set 1 words embedded.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs font-black text-emerald-100 pt-3 mt-2 border-t border-white/10">
              <span>Read Story + 20 Quizzes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          {/* Set 2 Story Card */}
          <Link
            href="/story/2"
            className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-sky-200">
                Set 2 • Italy (1610–1633)
              </span>
              <h3 className="text-base font-black text-white group-hover:underline mt-0.5">
                The Trial of Galileo Galilei: Astronomy, Heresy, & the Inquisition
              </h3>
              <p className="text-xs text-white/80 line-clamp-2 mt-1">
                Follow the discovery of Jupiter's moons, papal court intrigue, and the Inquisition trial with all 30 Set 2 words.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs font-black text-sky-100 pt-3 mt-2 border-t border-white/10">
              <span>Read Story + 20 Quizzes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </Link>
        </div>
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
