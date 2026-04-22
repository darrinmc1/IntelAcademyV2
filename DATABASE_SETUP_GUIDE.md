# 🗄️ VERCEL POSTGRES SETUP - STEP-BY-STEP GUIDE

## ✅ WHAT'S BEEN DONE

1. ✅ `.env.local` created (needs your real connection strings)
2. ✅ `database/schema.sql` updated (complete schema ready)
3. ✅ `@vercel/postgres` package already installed

---

## 📋 YOUR CHECKLIST

### ☐ STEP 1: Create Database in Vercel (5 minutes)

1. Go to: **https://vercel.com/darrinmc1s-projects**

2. Click on **Intel Academy V2** project

3. Click **"Storage"** tab at the top

4. Click **"Create Database"** button

5. Select **"Postgres"**

6. Configure:
   - **Database Name:** `intel-academy-db`
   - **Region:** Sydney or Singapore (closest to Brisbane)

7. Click **"Create"**

8. ⏱️ Wait 1-2 minutes for provisioning...

---

### ☐ STEP 2: Get Connection Strings (2 minutes)

1. Once database is created, click on it

2. Go to **".env.local"** tab

3. You'll see something like this:
   ```env
   POSTGRES_URL="postgres://default:xxx@xxx-pooler.aws-xxx.vercel-storage.com..."
   POSTGRES_PRISMA_URL="postgres://default:xxx@xxx-pooler.aws-xxx.vercel-storage.com..."
   POSTGRES_URL_NO_SSL="postgres://default:xxx@xxx-pooler.aws-xxx.vercel-storage.com..."
   POSTGRES_URL_NON_POOLING="postgres://default:xxx@xxx-pooler.aws-xxx.vercel-storage.com..."
   POSTGRES_USER="default"
   POSTGRES_HOST="xxx-pooler.aws-xxx.vercel-storage.com"
   POSTGRES_PASSWORD="xxx"
   POSTGRES_DATABASE="verceldb"
   ```

4. Click **"Copy Snippet"** to copy all variables

---

### ☐ STEP 3: Update Local .env.local (1 minute)

1. Open this file in VS Code:
   ```
   C:\Users\Darrin\Desktop\Projects\IntelAcademyV2\.env.local
   ```

2. **Delete all the placeholder text**

3. **Paste your real connection strings** from Vercel

4. **Save the file** (Ctrl+S)

---

### ☐ STEP 4: Execute Database Schema (5 minutes)

1. In Vercel dashboard, go to your database

2. Click **"Data"** tab

3. Click **"Query"** button

4. Open this file in VS Code:
   ```
   C:\Users\Darrin\Desktop\Projects\IntelAcademyV2\database\schema.sql
   ```

5. **Copy ALL the SQL** (Ctrl+A, then Ctrl+C)

6. **Paste into Vercel Query editor**

7. Click **"Run Query"**

8. ✅ You should see: "Success! Tables created"

---

### ☐ STEP 5: Test Locally (2 minutes)

1. Open terminal in Intel Academy:
   ```bash
   cd C:\Users\Darrin\Desktop\Projects\IntelAcademyV2
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. Open browser: **http://localhost:3000/leaderboard**

4. You should see the leaderboard page (empty at first)

---

### ☐ STEP 6: Add Test Data (Optional - 2 minutes)

If you want to see sample data in the leaderboard:

1. In Vercel Query editor, run:
   ```sql
   INSERT INTO user_profiles (id, codename, total_xp, current_rank, streak_days, access_tier)
   VALUES 
     ('test-user-1', 'Agent Alpha', 2500, 'Lead Analyst', 15, 'premium'),
     ('test-user-2', 'Agent Bravo', 1200, 'Senior Analyst', 7, 'registered'),
     ('test-user-3', 'Agent Charlie', 800, 'Senior Analyst', 3, 'registered');
   ```

2. Refresh your leaderboard page

3. ✅ You should see 3 test users!

---

## 🚀 STEP 7: Deploy to Vercel (Automatic!)

When you push to GitHub, Vercel will automatically:
1. Build your project
2. Connect to the database (using environment variables)
3. Deploy the new version

---

## 📊 WHAT THE DATABASE HAS

### Tables Created:
- ✅ **user_profiles** - User data, XP, ranks, streaks
- ✅ **lesson_progress** - Tracks completed lessons
- ✅ **user_badges** - Achievement tracking
- ✅ **leaderboard** - Fast leaderboard queries
- ✅ **subscriptions** - Stripe integration (for later)
- ✅ **certifications** - Cert tracking

### Automatic Features:
- ✅ Leaderboard auto-updates when users gain XP
- ✅ Rank positions auto-calculate
- ✅ Timestamps auto-update
- ✅ Indexes for fast queries

---

## 🧪 TESTING THE SYSTEM

### Test the API:

1. While dev server is running, open:
   ```
   http://localhost:3000/api/leaderboard?limit=10
   ```

2. You should see JSON response:
   ```json
   {
     "leaderboard": [
       {
         "codename": "Agent Alpha",
         "total_xp": 2500,
         "current_rank": "Lead Analyst",
         "rank_position": 1,
         "streak_days": 15
       },
       ...
     ]
   }
   ```

---

## 🐛 TROUBLESHOOTING

### "Connection refused" error:
- Check `.env.local` has real connection strings (not placeholders)
- Restart dev server: Stop (Ctrl+C) then `npm run dev`

### "Table already exists" error:
- Database schema already executed (this is fine!)
- Tables won't be duplicated

### Empty leaderboard:
- No users in database yet (normal at start)
- Add test data using SQL in Step 6
- Or complete a lesson to sync your profile

### Can't see leaderboard page:
- Make sure `app/leaderboard/page.tsx` exists
- Check console for errors (F12 in browser)

---

## ✅ COMPLETION CHECKLIST

After completing all steps:

- [ ] Database created in Vercel
- [ ] `.env.local` has real connection strings
- [ ] Schema executed successfully
- [ ] Local dev server runs without errors
- [ ] Leaderboard page loads
- [ ] API endpoint returns data
- [ ] Test users visible (if added)

---

## 🎯 NEXT STEPS

Once database is working:

1. **Test gamification**: Complete a lesson and see XP sync
2. **Push to GitHub**: Deploy with database integration
3. **Replicate to other sites**: Copy this setup to Learn AI, etc.
4. **Add Stripe later**: When ready to monetize

---

## 📞 FILES REFERENCE

- **Environment:** `C:\Users\Darrin\Desktop\Projects\IntelAcademyV2\.env.local`
- **Schema:** `C:\Users\Darrin\Desktop\Projects\IntelAcademyV2\database\schema.sql`
- **Config:** `C:\Users\Darrin\Desktop\Projects\IntelAcademyV2\config\site-config.json`
- **Gamification:** `C:\Users\Darrin\Desktop\Projects\IntelAcademyV2\lib\gamification-enhanced.ts`

---

**🎉 You're ready to set up Vercel Postgres! Follow the checklist above.**
