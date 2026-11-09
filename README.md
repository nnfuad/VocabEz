# VocabEz

A gamified, Duolingo-style GRE vocabulary mastery web application designed to conquer all 810 GregMAT words across 27 sets in 30 days.

## 🚀 Features

- **Duolingo-Style Learning Path:** Stepping stone roadmap across all 27 Sets (30 words per set) with tactile 3D buttons, interactive animations, XP, hearts, and streaks.
- **Practice Anything Anytime Strategy Hub:**
  - ⚡ **Polarity Math Drills:** Master positive vs. negative connotation pairing for GRE text completion & sentence equivalence (+ / - / neutral logic).
  - 🔄 **Synonym Clusters:** Group words into GRE synonym clusters with paired distractors.
  - ⚔️ **Antonym Pairs:** Practice direct opposites and contrasting secondary definitions.
  - 📝 **Dual-Blank Context:** Simulated GRE Sentence Equivalence & Text Completion fill-in-the-blank drills.
  - 🏥 **Weak Words Hospital:** Targeted rehabilitation system for any word missed during sessions.
  - ⏱️ **Speed Blitz:** High-intensity rapid-fire testing mode.
- **Guest-First with Cloud Sync:** Practice immediately as a guest with local persistence, or sign up with Supabase to securely preserve streaks, XP, hearts, and mastery across devices.
- **Audio Pronunciation:** Real-time Web Speech API audio for every target word.
- **Mobile-First Responsive UI:** Engineered with touch targets $\ge 46\text{px}$, sticky mobile navigation dock, and guest data-loss warning banners.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS + Lucide Icons + Canvas Confetti
- **Backend & Auth:** Supabase (Auth + PostgreSQL)
- **Data Source:** Normalized & enriched dataset of 810 GregMAT vocabulary words (Sets 1–27)

## 🏃 Getting Started

1. Clone repository:
   ```bash
   git clone https://github.com/nnfuad/VocabEz.git
   cd VocabEz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3001](http://localhost:3001) in your browser.
