export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          display_name: string | null;
          avatar_url: string | null;
          xp: number;
          streak: number;
          longest_streak: number;
          hearts: number;
          last_active_date: string | null;
          level: number;
          gems: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          xp?: number;
          streak?: number;
          longest_streak?: number;
          hearts?: number;
          last_active_date?: string | null;
          level?: number;
          gems?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          xp?: number;
          streak?: number;
          longest_streak?: number;
          hearts?: number;
          last_active_date?: string | null;
          level?: number;
          gems?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      word_mastery: {
        Row: {
          id: string;
          user_id: string;
          word: string;
          word_id: string;
          set_num: number;
          box_level: number;
          ease_factor: number;
          interval_days: number;
          repetitions: number;
          lapses: number;
          next_review_at: string;
          last_reviewed_at: string | null;
          last_rating: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          word: string;
          word_id: string;
          set_num: number;
          box_level?: number;
          ease_factor?: number;
          interval_days?: number;
          repetitions?: number;
          lapses?: number;
          next_review_at?: string;
          last_reviewed_at?: string | null;
          last_rating?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          word?: string;
          word_id?: string;
          set_num?: number;
          box_level?: number;
          ease_factor?: number;
          interval_days?: number;
          repetitions?: number;
          lapses?: number;
          next_review_at?: string;
          last_reviewed_at?: string | null;
          last_rating?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      study_sessions: {
        Row: {
          id: string;
          user_id: string;
          session_type: string;
          set_num: number | null;
          words_studied: number;
          correct_count: number;
          incorrect_count: number;
          xp_earned: number;
          duration_seconds: number;
          completed_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          session_type: string;
          set_num?: number | null;
          words_studied?: number;
          correct_count?: number;
          incorrect_count?: number;
          xp_earned?: number;
          duration_seconds?: number;
          completed_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          session_type?: string;
          set_num?: number | null;
          words_studied?: number;
          correct_count?: number;
          incorrect_count?: number;
          xp_earned?: number;
          duration_seconds?: number;
          completed_at?: string;
          created_at?: string;
        };
      };
      user_achievements: {
        Row: {
          id: string;
          user_id: string;
          achievement_id: string;
          unlocked_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          achievement_id: string;
          unlocked_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          achievement_id?: string;
          unlocked_at?: string;
        };
      };
    };
    Functions: {
      sync_guest_progress: {
        Args: {
          p_guest_profile: Json;
          p_guest_word_mastery: Json;
          p_guest_sessions: Json;
          p_guest_achievements: Json;
        };
        Returns: Json;
      };
    };
  };
}

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type WordMastery = Database['public']['Tables']['word_mastery']['Row'];
export type StudySession = Database['public']['Tables']['study_sessions']['Row'];
export type UserAchievement = Database['public']['Tables']['user_achievements']['Row'];
