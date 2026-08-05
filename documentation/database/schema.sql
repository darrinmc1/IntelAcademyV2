-- Intel Academy - Complete Database Schema
-- Updated: April 14, 2026
-- Compatible with gamification-enhanced.ts

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User profiles (core gamification data)
CREATE TABLE IF NOT EXISTS user_profiles (
  id TEXT PRIMARY KEY,  -- Using TEXT for compatibility with localStorage user IDs
  codename TEXT NOT NULL,
  email TEXT UNIQUE,
  total_xp INTEGER DEFAULT 0,
  current_rank TEXT DEFAULT 'Trainee',
  streak_days INTEGER DEFAULT 0,
  best_streak INTEGER DEFAULT 0,
  access_tier TEXT DEFAULT 'free', -- free, registered, premium, subscriber
  last_activity_date TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for leaderboard queries
CREATE INDEX IF NOT EXISTS idx_user_profiles_total_xp ON user_profiles(total_xp DESC);
CREATE INDEX IF NOT EXISTS idx_user_profiles_access_tier ON user_profiles(access_tier);

-- Lesson progress tracking
CREATE TABLE IF NOT EXISTS lesson_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT REFERENCES user_profiles(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW(),
  quiz_score INTEGER,
  points_earned INTEGER DEFAULT 0,
  UNIQUE(user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_lesson_progress_user_id ON lesson_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_completed_at ON lesson_progress(completed_at DESC);

-- User badges (achievement tracking)
CREATE TABLE IF NOT EXISTS user_badges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT REFERENCES user_profiles(id) ON DELETE CASCADE,
  badge_id TEXT NOT NULL,
  badge_name TEXT NOT NULL,
  badge_icon TEXT,
  earned_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

CREATE INDEX IF NOT EXISTS idx_user_badges_user_id ON user_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_user_badges_earned_at ON user_badges(earned_at DESC);

-- Leaderboard (materialized view alternative - fast queries)
CREATE TABLE IF NOT EXISTS leaderboard (
  user_id TEXT PRIMARY KEY REFERENCES user_profiles(id) ON DELETE CASCADE,
  codename TEXT NOT NULL,
  total_xp INTEGER DEFAULT 0,
  current_rank TEXT DEFAULT 'Trainee',
  streak_days INTEGER DEFAULT 0,
  rank_position INTEGER,
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leaderboard_rank_position ON leaderboard(rank_position);
CREATE INDEX IF NOT EXISTS idx_leaderboard_total_xp ON leaderboard(total_xp DESC);

-- Subscriptions (Stripe integration - for later)
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT REFERENCES user_profiles(id) ON DELETE CASCADE,
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  plan_type TEXT NOT NULL, -- pro_monthly, pro_yearly
  status TEXT DEFAULT 'active', -- active, canceled, past_due
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_customer_id ON subscriptions(stripe_customer_id);

-- Certifications
CREATE TABLE IF NOT EXISTS certifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT REFERENCES user_profiles(id) ON DELETE CASCADE,
  cert_type TEXT NOT NULL, -- associate, professional, master
  cert_number TEXT UNIQUE NOT NULL,
  issued_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP,
  status TEXT DEFAULT 'active' -- active, expired, revoked
);

CREATE INDEX IF NOT EXISTS idx_certifications_user_id ON certifications(user_id);
CREATE INDEX IF NOT EXISTS idx_certifications_cert_number ON certifications(cert_number);

-- Function to update leaderboard automatically
CREATE OR REPLACE FUNCTION update_leaderboard()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert or update leaderboard entry
  INSERT INTO leaderboard (user_id, codename, total_xp, current_rank, streak_days, updated_at)
  VALUES (NEW.id, NEW.codename, NEW.total_xp, NEW.current_rank, NEW.streak_days, NOW())
  ON CONFLICT (user_id) 
  DO UPDATE SET
    codename = EXCLUDED.codename,
    total_xp = EXCLUDED.total_xp,
    current_rank = EXCLUDED.current_rank,
    streak_days = EXCLUDED.streak_days,
    updated_at = NOW();
  
  -- Recalculate rank positions
  WITH ranked_users AS (
    SELECT 
      user_id,
      ROW_NUMBER() OVER (ORDER BY total_xp DESC) as new_rank_position
    FROM leaderboard
  )
  UPDATE leaderboard l
  SET rank_position = r.new_rank_position
  FROM ranked_users r
  WHERE l.user_id = r.user_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update leaderboard when user_profiles changes
DROP TRIGGER IF EXISTS trigger_update_leaderboard ON user_profiles;
CREATE TRIGGER trigger_update_leaderboard
AFTER INSERT OR UPDATE ON user_profiles
FOR EACH ROW
EXECUTE FUNCTION update_leaderboard();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at timestamps
CREATE TRIGGER set_updated_at_user_profiles
BEFORE UPDATE ON user_profiles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_updated_at_subscriptions
BEFORE UPDATE ON subscriptions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Initial data / sample data (optional - for testing)
-- Uncomment to add sample users for testing
/*
INSERT INTO user_profiles (id, codename, total_xp, current_rank, streak_days, access_tier)
VALUES 
  ('test-user-1', 'Agent Alpha', 2500, 'Lead Analyst', 15, 'premium'),
  ('test-user-2', 'Agent Bravo', 1200, 'Senior Analyst', 7, 'registered'),
  ('test-user-3', 'Agent Charlie', 800, 'Senior Analyst', 3, 'registered');
*/

-- Schema complete!
-- Execute this file in Vercel Postgres dashboard: Data > Query
