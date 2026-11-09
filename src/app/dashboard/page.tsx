'use client';

import React from 'react';
import Link from 'next/link';
import {
  Check,
  Star,
  Lock,
  Flame,
  Zap,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { guestStorage, UserStats } from '@/lib/guestStorage';
import { Button3D } from '@/components/ui/Button3D';
import { GuestWarningBanner } from '@/components/ui/GuestWarningBanner';

interface SetNodeInfo {
  setNum: number;
  title: string;
  wordCount: number;
  sampleWords: string[];
}

const SET_INFO: SetNodeInfo[] = [
  { setNum: 1, title: 'Set 1: High-Frequency Starters', wordCount: 30, sampleWords: ['abound', 'austere', 'belie', 'taciturn'] },
  { setNum: 2, title: 'Set 2: Bold & Critical', wordCount: 30, sampleWords: ['adulterate', 'audacious', 'castigate', 'venerate'] },
  { setNum: 3, title: 'Set 3: Subtlety & Logic', wordCount: 30, sampleWords: ['abate', 'arcane', 'copious', 'verbose'] },
  { setNum: 4, title: 'Set 4: Nuance & Evidence', wordCount: 30, sampleWords: ['approbation', 'ephemeral', 'mitigate', 'vacillate'] },
  { setNum: 5, title: 'Set 5: Character & Temperament', wordCount: 30, sampleWords: ['aloof', 'enigmatic', 'panache', 'zealous'] },
  { setNum: 6, title: 'Set 6: Deception & Truth', wordCount: 30, sampleWords: ['bolster', 'specious', 'spurious', 'ubiquitous'] },
  { setNum: 7, title: 'Set 7: Fortitude & Scarcity', wordCount: 30, sampleWords: ['arbitrary', 'dearth', 'immutable', 'salubrious'] },
  { setNum: 8, title: 'Set 8: Dynamics & Shrewdness', wordCount: 30, sampleWords: ['egregious', 'galvanize', 'pugnacious', 'sagacious'] },
  { setNum: 9, title: 'Set 9: Intellect & Style', wordCount: 30, sampleWords: ['circumspect', 'deleterious', 'erudite', 'meticulous'] },
  { setNum: 10, title: 'Set 10: Discernment & Insight', wordCount: 30, sampleWords: ['acumen', 'esoteric', 'fastidious', 'supersede'] },
  { setNum: 11, title: 'Set 11: Decorum & Danger', wordCount: 30, sampleWords: ['clandestine', 'cumbersome', 'panacea', 'truculent'] },
  { setNum: 12, title: 'Set 12: Precision & Economy', wordCount: 30, sampleWords: ['belligerent', 'laconic', 'parsimonious', 'vitiate'] },
  { setNum: 13, title: 'Set 13: Complexity & Clarity', wordCount: 30, sampleWords: ['byzantine', 'fervor', 'numinous', 'pellucid'] },
  { setNum: 14, title: 'Set 14: Skill & Restraint', wordCount: 30, sampleWords: ['adroit', 'flummoxed', 'reticent', 'trenchant'] },
  { setNum: 15, title: 'Set 15: Emotion & Truth', wordCount: 30, sampleWords: ['apathy', 'consensus', 'propriety', 'virulent'] },
  { setNum: 16, title: 'Set 16: Resistance & Reflection', wordCount: 30, sampleWords: ['antedate', 'iconoclastic', 'profligate', 'ruminate'] },
  { setNum: 17, title: 'Set 17: Skepticism & Wit', wordCount: 30, sampleWords: ['assertive', 'disingenuous', 'pithy', 'upbraid'] },
  { setNum: 18, title: 'Set 18: Diligence & Conflict', wordCount: 30, sampleWords: ['amalgamate', 'industrious', 'pernicious', 'prolix'] },
  { setNum: 19, title: 'Set 19: Motive & Transience', wordCount: 30, sampleWords: ['cunning', 'ebullient', 'munificent', 'transitory'] },
  { setNum: 20, title: 'Set 20: Character & Prowess', wordCount: 30, sampleWords: ['confound', 'largesse', 'prowess', 'vanquish'] },
  { setNum: 21, title: 'Set 21: Resilience & Fortitude', wordCount: 30, sampleWords: ['aver', 'fortitude', 'magnanimous', 'resilient'] },
  { setNum: 22, title: 'Set 22: Artistry & Balance', wordCount: 30, sampleWords: ['chastise', 'extrapolate', 'obstinate', 'vivacious'] },
  { setNum: 23, title: 'Set 23: Wit & Vigilance', wordCount: 30, sampleWords: ['astute', 'decry', 'nonplussed', 'vigilant'] },
  { setNum: 24, title: 'Set 24: Conflict & Movement', wordCount: 30, sampleWords: ['benevolent', 'buttress', 'mercurial', 'surmount'] },
  { setNum: 25, title: 'Set 25: Speech & Rigor', wordCount: 30, sampleWords: ['adept', 'articulate', 'harangue', 'steadfast'] },
  { setNum: 26, title: 'Set 26: Philosophy & Calm', wordCount: 30, sampleWords: ['ardent', 'axiomatic', 'equanimity', 'serene'] },
  { setNum: 27, title: 'Set 27: Mastery Summit', wordCount: 30, sampleWords: ['bombastic', 'lambaste', 'peccadillo', 'tangible'] },
];

export default function DashboardPage() {
  const [stats, setStats] = React.useState<UserStats | null>(null);

  React.useEffect(() => {
    setStats(guestStorage.getStats());
  }, []);

  const completedSets = stats?.completedSets || [];
  const nextSet = SET_INFO.find((s) => !completedSets.includes(s.setNum))?.setNum || 1;

  // Group into units
  const units = [
    { unitNum: 1, title: 'Unit 1: Foundations & Core Roots', sets: SET_INFO.slice(0, 9), bg: 'from-emerald-500 to-green-600' },
    { unitNum: 2, title: 'Unit 2: Intermediate GRE Caliber', sets: SET_INFO.slice(9, 18), bg: 'from-blue-500 to-cyan-600' },
    { unitNum: 3, title: 'Unit 3: High-Frequency Masterclass', sets: SET_INFO.slice(18, 27), bg: 'from-purple-500 to-indigo-600' },
  ];

  return (
    <div className="space-y-6 md:space-y-8 select-none">
      {/* Guest Data Loss Warning Banner */}
      <GuestWarningBanner />

      {/* 30-Day Master Header Card */}
      <div className="rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#58CC02] to-[#46A302] text-white p-5 md:p-6 shadow-tactile-green border-b-4 border-[#3F8500]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> 30-Day GRE Vocab Curriculum
            </div>
            <h1 className="text-xl md:text-3xl font-black">
              VocabEz 810 Words Roadmap
            </h1>
            <p className="text-xs md:text-sm font-semibold opacity-90 mt-1 max-w-xl leading-relaxed">
              1 set per day (30 words) + dynamic spaced repetition review. Practice anytime, anywhere with GRE strategy drills!
            </p>
          </div>

          <div className="shrink-0">
            <Link href={`/session/set_quiz?set=${nextSet}`}>
              <Button3D variant="white" size="md" className="w-full sm:w-auto shadow-md">
                <span className="flex items-center justify-center gap-2 text-gray-900">
                  Continue Set {nextSet} <ArrowRight className="w-4 h-4 stroke-[3]" />
                </span>
              </Button3D>
            </Link>
          </div>
        </div>

        {/* Quick Progress Bar */}
        <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between text-xs font-black gap-2">
          <span>{completedSets.length} of 27 Sets Completed ({Math.round((completedSets.length / 27) * 100)}%)</span>
          <span className="flex items-center gap-1">
            <Flame className="w-4 h-4 fill-current text-yellow-300" />
            Day {stats?.streak || 1} of 30
          </span>
        </div>
      </div>

      {/* Units & Duolingo-style Path Nodes */}
      <div className="space-y-10 md:space-y-12">
        {units.map((unit) => (
          <div key={unit.unitNum} className="space-y-5 md:space-y-6">
            {/* Unit Banner */}
            <div className={`rounded-2xl p-4 bg-gradient-to-r ${unit.bg} text-white shadow-md flex items-center justify-between`}>
              <div>
                <span className="text-[10px] md:text-xs uppercase font-black tracking-widest opacity-80">
                  Section {unit.unitNum}
                </span>
                <h2 className="text-base md:text-xl font-black">{unit.title}</h2>
              </div>
              <span className="text-[11px] md:text-xs font-extrabold px-2.5 py-1 rounded-full bg-white/20 shrink-0">
                Sets {unit.sets[0].setNum}–{unit.sets[unit.sets.length - 1].setNum}
              </span>
            </div>

            {/* Stepping Path Nodes */}
            <div className="relative flex flex-col items-center py-2 space-y-6">
              {unit.sets.map((set, idx) => {
                const isCompleted = completedSets.includes(set.setNum);
                const isCurrent = set.setNum === nextSet;
                const isLocked = !isCompleted && !isCurrent;

                // Alternate X offsets for zig-zag stepping stones like Duolingo
                // On mobile, reduce offset so it never overflows narrow screens!
                const desktopOffsets = [0, 45, -45, 30, -30, 50, 0, -40, 40];
                const mobileOffsets = [0, 25, -25, 18, -18, 28, 0, -22, 22];

                return (
                  <div
                    key={set.setNum}
                    className="flex flex-col items-center relative group"
                  >
                    {/* Active Ripple */}
                    {isCurrent && (
                      <span className="absolute -inset-2 rounded-full bg-[#58CC02]/30 animate-ping pointer-events-none" />
                    )}

                    {/* 3D Round Node */}
                    <Link
                      href={isLocked ? '#' : `/session/set_quiz?set=${set.setNum}`}
                      className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-b-8 active:border-b-2 active:translate-y-1.5 transition-all duration-75 relative z-10 ${
                        isCompleted
                          ? 'bg-[#58CC02] border-[#46A302] text-white shadow-tactile-green'
                          : isCurrent
                          ? 'bg-[#1CB0F6] border-[#1482BA] text-white shadow-tactile-blue animate-bounce-subtle'
                          : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-9 h-9 stroke-[3.5]" />
                      ) : isCurrent ? (
                        <Star className="w-9 h-9 fill-current animate-pulse" />
                      ) : (
                        <Lock className="w-6 h-6" />
                      )}
                    </Link>

                    {/* Label Pill */}
                    <div className="mt-2 text-center">
                      <span className="inline-block px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-black shadow-sm text-gray-800 dark:text-gray-200">
                        Set {set.setNum}
                      </span>
                      <p className="text-[10px] text-gray-500 font-bold max-w-[120px] truncate mt-0.5">
                        {set.sampleWords.slice(0, 2).join(', ')}...
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
