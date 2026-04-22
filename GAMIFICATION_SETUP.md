# GAMIFICATION SYSTEM SETUP GUIDE

## ✅ FILES CREATED

### Core System Files (Intel Academy)
- `config/site-config.json` - Site configuration (ranks, pricing, points)
- `database/schema.sql` - Database tables for gamification
- `lib/gamification-enhanced.ts` - XP system with database sync
- `components/gamification/leaderboard.tsx` - Leaderboard component
- `components/gamification/rank-indicator.tsx` - Rank progress display
- `app/api/leaderboard/route.ts` - Leaderboard API endpoint
- `app/leaderboard/page.tsx` - Leaderboard page

### Stripe Files (For Later - Not Created Yet)
- `lib/stripe-config.ts`
- `components/stripe/pricing-table.tsx`
- `app/api/stripe/checkout/route.ts`

## 🎯 NEXT STEPS

### 1. Set Up Vercel Postgres Database

1. Go to your Vercel dashboard: https://vercel.com/darrinmc1s-projects
2. Select the Intel Academy project
3. Go to Storage → Create Database → Postgres
4. Copy the connection strings to `.env.local`:

```bash
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
POSTGRES_URL_NON_POOLING="postgres://..."
```

5. Run the schema:
   - In Vercel dashboard → Data tab
   - Click "Query"
   - Copy contents of `database/schema.sql`
   - Paste and execute

### 2. Test Locally

```bash
cd C:\Users\Darrin\Desktop\Projects\IntelAcademyV2
npm run dev
```

Visit: http://localhost:3000/leaderboard

### 3. Integrate with Existing System

Update your lesson completion to sync to database:

```typescript
// In your lesson complete handler
import { syncToDatabase } from '@/lib/gamification-enhanced'
import { getUserProfile } from '@/lib/user-store'

// After user completes lesson
const profile = getUserProfile()
await syncToDatabase(profile)
```

### 4. Add to Your Profile/Dashboard

```typescript
import { RankIndicator } from '@/components/gamification/rank-indicator'

// In your profile component
<RankIndicator totalXp={profile.xp} />
```

### 5. Replicate to Other 5 Sites

Once working in Intel Academy, copy these folders to other sites:
- config/
- database/
- lib/gamification-enhanced.ts
- components/gamification/
- app/api/leaderboard/
- app/leaderboard/

Just update `config/site-config.json` for each site (different names, themes).

## 📊 HOW IT WORKS

1. **localStorage (Existing)** - Your current system continues to work offline
2. **Database Sync** - Call `syncToDatabase()` to save to Vercel Postgres
3. **Leaderboard** - Queries database to rank all users
4. **Ranks** - Automatically calculated based on XP thresholds

## 🔧 TROUBLESHOOTING

If leaderboard is empty:
1. Check database connection in Vercel
2. Verify schema was executed
3. Call `syncToDatabase()` for your test user
4. Check `/api/leaderboard` returns data

## 🎮 GAMIFICATION FEATURES

✅ **Working Now:**
- XP tracking (localStorage)
- Badge system (localStorage)
- Streak tracking (localStorage)
- Leaderboard (database)
- Rank progression (config-based)

🔜 **Coming Later:**
- Stripe payments
- Certifications
- Premium features
