-- ============================================================================
-- GregMAT Vocab App - Supabase PostgreSQL Schema & Security Policies
-- Paste this script into your Supabase Dashboard SQL Editor and click RUN.
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ----------------------------------------------------------------------------
-- 1. PROFILES TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE,
    display_name TEXT,
    avatar_url TEXT,
    xp INTEGER NOT NULL DEFAULT 0 CHECK (xp >= 0),
    streak INTEGER NOT NULL DEFAULT 0 CHECK (streak >= 0),
    longest_streak INTEGER NOT NULL DEFAULT 0 CHECK (longest_streak >= 0),
    hearts INTEGER NOT NULL DEFAULT 5 CHECK (hearts >= 0 AND hearts <= 5),
    last_active_date DATE DEFAULT CURRENT_DATE,
    level INTEGER NOT NULL DEFAULT 1 CHECK (level >= 1),
    gems INTEGER NOT NULL DEFAULT 0 CHECK (gems >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_profiles_username ON public.profiles(username);
CREATE INDEX IF NOT EXISTS idx_profiles_xp_leaderboard ON public.profiles(xp DESC);

-- ----------------------------------------------------------------------------
-- 2. WORD_MASTERY TABLE (Leitner Box + SM-2 Spaced Repetition)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.word_mastery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    word TEXT NOT NULL,
    word_id TEXT NOT NULL,
    set_num INTEGER NOT NULL CHECK (set_num >= 1),
    box_level INTEGER NOT NULL DEFAULT 1 CHECK (box_level BETWEEN 1 AND 5),
    ease_factor NUMERIC(4, 2) NOT NULL DEFAULT 2.50 CHECK (ease_factor >= 1.30),
    interval_days INTEGER NOT NULL DEFAULT 0 CHECK (interval_days >= 0),
    repetitions INTEGER NOT NULL DEFAULT 0 CHECK (repetitions >= 0),
    lapses INTEGER NOT NULL DEFAULT 0 CHECK (lapses >= 0),
    next_review_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    last_reviewed_at TIMESTAMPTZ,
    last_rating INTEGER CHECK (last_rating BETWEEN 1 AND 4),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT uq_user_word UNIQUE (user_id, word_id)
);

CREATE INDEX IF NOT EXISTS idx_word_mastery_user_set ON public.word_mastery(user_id, set_num);
CREATE INDEX IF NOT EXISTS idx_word_mastery_user_review ON public.word_mastery(user_id, next_review_at);
CREATE INDEX IF NOT EXISTS idx_word_mastery_user_box ON public.word_mastery(user_id, box_level);

-- ----------------------------------------------------------------------------
-- 3. STUDY_SESSIONS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.study_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    session_type TEXT NOT NULL,
    set_num INTEGER,
    words_studied INTEGER NOT NULL DEFAULT 0 CHECK (words_studied >= 0),
    correct_count INTEGER NOT NULL DEFAULT 0 CHECK (correct_count >= 0),
    incorrect_count INTEGER NOT NULL DEFAULT 0 CHECK (incorrect_count >= 0),
    xp_earned INTEGER NOT NULL DEFAULT 0 CHECK (xp_earned >= 0),
    duration_seconds INTEGER NOT NULL DEFAULT 0 CHECK (duration_seconds >= 0),
    completed_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_study_sessions_user_date ON public.study_sessions(user_id, completed_at DESC);

-- ----------------------------------------------------------------------------
-- 4. USER_ACHIEVEMENTS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    achievement_id TEXT NOT NULL,
    unlocked_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT uq_user_achievement UNIQUE (user_id, achievement_id)
);

-- ----------------------------------------------------------------------------
-- 5. ROW LEVEL SECURITY (RLS) POLICIES
-- ----------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.word_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read of profiles"
    ON public.profiles FOR SELECT
    USING (true);

CREATE POLICY "Allow individual insert of profile"
    ON public.profiles FOR INSERT
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Allow individual update of profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Allow individual all on word_mastery"
    ON public.word_mastery FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow individual all on study_sessions"
    ON public.study_sessions FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow individual all on user_achievements"
    ON public.user_achievements FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- 6. AUTO-CREATE PROFILE ON SIGNUP TRIGGER
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    v_username TEXT;
    v_display_name TEXT;
BEGIN
    v_username := COALESCE(
        NEW.raw_user_meta_data->>'username',
        SPLIT_PART(NEW.email, '@', 1) || '_' || SUBSTRING(NEW.id::text, 1, 4)
    );
    v_display_name := COALESCE(
        NEW.raw_user_meta_data->>'display_name',
        SPLIT_PART(NEW.email, '@', 1)
    );

    INSERT INTO public.profiles (
        id, username, display_name, xp, streak, longest_streak, hearts, level, gems, last_active_date
    ) VALUES (
        NEW.id, v_username, v_display_name, 0, 1, 1, 5, 1, 100, CURRENT_DATE
    )
    ON CONFLICT (id) DO NOTHING;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
