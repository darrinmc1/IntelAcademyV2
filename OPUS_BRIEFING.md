# Intel Academy Project Briefing for Opus
**Date:** July 20, 2026  
**Project:** The Intel Analyst Academy (https://theintelanalystacademy.com/)  
**Prepared by:** Initial review and planning phase  
**Status:** Ready for implementation by Opus model

---

## EXECUTIVE SUMMARY

Two features need implementation:
1. **Admin Access Control** — Restrict `/admin/*` routes to authenticated admins only (currently open)
2. **Content Review Workflow** — Create approval process for content (non-admins submit, admins review/approve)

**Timeline estimate:** 6-8 hours total  
**Recommended order:** Task 1 first (blocker), then Task 2

---

## CURRENT PROJECT STATUS

### Tech Stack
- **Framework:** Next.js 15.5, React 19, TypeScript
- **Hosting:** Vercel (live at https://theintelanalystacademy.com/)
- **Database:** Vercel Postgres (schema deployed)
- **Auth:** JWT-based with Supabase integration
- **Email:** Resend API (configured but env vars missing in production)

### Recent Activity
- Last commit: `aeb84e1` — "Add honeypot protection to waitlist popup"
- Active development (commits every few days)
- Multiple versions in git history; V3 is current live version

---

## SYSTEM-BY-SYSTEM STATUS

### 1. EMAIL SYSTEM — ✅ Partially Functional
**Location:** `/lib/email.ts`  
**What's working:**
- Resend API integration implemented
- Three templates: `sendWelcome()`, `sendAdminNotification()`, `sendTopicRequestEmail()`
- Proper error handling and logging

**What's broken:**
- ❌ Env vars not set in production: `RESEND_API_KEY`, `RESEND_FROM`, `NOTIFY_EMAIL`
- Currently falls back to warning logs: "RESEND_API_KEY not set — skipping send"
- HTML templates use string concatenation (no component reuse)
- No delivery tracking or bounce handling
- No A/B testing capability

**Quick Fix:** Add env vars to Vercel dashboard under Settings > Environment Variables

---

### 2. REQUEST TOPIC SYSTEM — ✅ Functional but Incomplete
**Locations:**
- API: `/app/api/request-topic/route.ts`
- Form: `/app/coming-soon/request-topic-form.tsx` + `/app/request-topic/page.tsx`
- Action: `/app/actions/send-topic-interest.ts`

**What's working:**
- POST endpoint accepts email, topic, description
- Validates required fields
- Routes to email system
- Frontend form with basic validation
- Publicly accessible at `/request-topic`

**What's broken:**
- ❌ No database persistence — requests disappear after email
- ❌ No admin UI to view/track/respond to requests
- ❌ No user confirmation email (only admin notification)
- No request status tracking or followup workflow
- Minimal input validation beyond honeypot

**Quick Fix:** Create `content_requests` database table (see Task 2 schema section)

---

### 3. UPDATING SYSTEM — ⚠️ Exists but Needs Audit Trail
**Locations:** `/app/admin/content-manager/topics/`

**What's working:**
- Admins can edit topic content (Markdown)
- Rich text editor with save/preview
- Content saved to database

**What's broken:**
- ❌ No edit history or audit trail
- ❌ No rollback mechanism visible to users
- ❌ Concurrent edit handling missing (potential overwrites)
- No change notifications
- Direct production edits (no staging)

**Will be addressed by:** Task 2 Review Workflow (adds audit trail)

---

### 4. REVIEWING SYSTEM — ❌ NOT IMPLEMENTED
**Status:** Does not exist in codebase

**What's needed:**
- Editorial approval workflow
- Reviewer dashboard
- Approval/rejection with comments
- Audit trail of changes
- Email notifications to editors

**Will be implemented by:** Task 2 (full design below)

---

### Database Schema
**Status:** ✅ Well-structured, gamification-ready

Tables present:
- `user_profiles` — core user data + XP, ranks, streaks (no `role` column yet)
- `lesson_progress` — completion tracking
- `user_badges` — achievements
- `leaderboard` — auto-updated rankings
- `subscriptions` — Stripe integration (prep)
- `certifications` — cert tracking

**Missing tables (need to add):**
- `content_submissions` — for review workflow
- `review_audit_log` — immutable change history
- `content_requests` — for request-topic persistence

---

### Security & Auth Issues
**Current state:**
- Admin routes (`/app/admin/*`) are NOT protected
- Anyone can access content-manager, analytics, settings
- No role-based access control (RBAC)
- JWT system exists but doesn't enforce admin checks
- `access_tier` field exists (free/registered/premium/subscriber) but not used for admin gating

**Critical:** Must fix before review workflow (Task 2 depends on it)

---

## IMPLEMENTATION PLAN

### TASK 1: ADMIN ACCESS CONTROL (Blocker for Task 2)
**Complexity:** Medium | **Estimated time:** 2-3 hours  
**Blocker status:** Required before Task 2

#### Phase 1: Add Role System to Database
```sql
ALTER TABLE user_profiles ADD COLUMN role TEXT DEFAULT 'user';
CREATE INDEX idx_user_profiles_role ON user_profiles(role);
```
Roles: `admin`, `moderator`, `editor`, `viewer`, `user`

#### Phase 2: Implement RBAC Guards
**Create `/lib/rbac.ts`:**
```typescript
// Export functions:
export async function requireAdmin(request?: NextRequest)
  // Checks JWT token, validates role=admin, redirects if not authenticated
  // Returns authenticated user or throws redirect

export const rolePermissions = {
  admin: ['view_dashboard', 'manage_content', 'manage_users', 'view_analytics'],
  editor: ['create_content', 'submit_for_review'],
  moderator: ['review_content', 'ban_users'],
  viewer: ['view_content'],
  user: ['view_public_content']
}

export function checkPermission(role: string, resource: string): boolean
```

#### Phase 3: Protect Admin Routes
**Modify `/app/admin/layout.tsx`** (create if doesn't exist):
```typescript
import { requireAdmin } from '@/lib/rbac'

export default async function AdminLayout({ children }) {
  await requireAdmin() // Redirects if not admin
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}
```

This wraps all `/app/admin/*` routes with auth check.

#### Phase 4: Update JWT & Login Flow
**Modify `/lib/auth.ts`:**
- Fetch `role` from `user_profiles` during login
- Store role in JWT payload
- Update session data to include role

#### Phase 5: Protect API Routes
**Create `/app/api/admin/[...route]/route.ts`:**
- All admin API endpoints check role before executing
- Return 403 Forbidden if user not admin

#### Critical Files to Create/Modify
| File | Action | Notes |
|------|--------|-------|
| `/lib/rbac.ts` | CREATE | Core RBAC logic |
| `/app/admin/layout.tsx` | CREATE | Auth wrapper for all admin routes |
| `/lib/auth.ts` | MODIFY | Add role to JWT payload |
| `/database/schema.sql` | MODIFY | Add role column |
| `/lib/db.ts` | MODIFY | Add role management functions |
| `/app/admin/AdminLayoutClient.tsx` | MODIFY | Remove duplicate auth checks |

#### Testing Checklist
- [ ] Unauthenticated user redirected from `/admin`
- [ ] Non-admin user redirected from `/admin`
- [ ] Admin can access `/admin` and all sub-routes
- [ ] Role persists across page refreshes
- [ ] Logout removes admin privileges immediately

---

### TASK 2: CONTENT REVIEW WORKFLOW (Depends on Task 1 ✓)
**Complexity:** High | **Estimated time:** 4-5 hours  
**Prerequisite:** Task 1 must be complete and working

#### Database Schema Changes

**Create `content_submissions` table:**
```sql
CREATE TABLE content_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL,  -- 'topic', 'learning-path', 'lesson'
  content_id TEXT NOT NULL,
  status TEXT DEFAULT 'draft',  -- draft, submitted, approved, rejected
  submitted_by TEXT REFERENCES user_profiles(id),
  reviewer_id TEXT REFERENCES user_profiles(id),
  reviewer_comments TEXT,
  reviewed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(type, content_id)
);

CREATE INDEX idx_submissions_status ON content_submissions(status);
CREATE INDEX idx_submissions_reviewer ON content_submissions(reviewer_id);
```

**Create `review_audit_log` table:**
```sql
CREATE TABLE review_audit_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id UUID REFERENCES content_submissions(id),
  reviewer_id TEXT REFERENCES user_profiles(id),
  action TEXT NOT NULL,  -- 'submitted', 'approved', 'rejected', 'returned'
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_audit_log_submission ON review_audit_log(submission_id);
```

#### Workflow State Machine
```
┌─────────────────────────────────────────────────────────────┐
│                    CONTENT SUBMISSION WORKFLOW               │
└─────────────────────────────────────────────────────────────┘

EDITOR (non-admin) Flow:
  Draft (local)
      ↓ [click Submit for Review]
  Submitted (pending admin review)
      ├─ [ADMIN approves]
      │   ↓
      │   Approved (goes live)
      │   Audit log entry created
      │   Email: "Content approved! Now live"
      │
      └─ [ADMIN rejects with feedback]
          ↓
          Rejected (returned to draft)
          Audit log entry + comment stored
          Email: "Content rejected. Reviewer feedback: ..."
          ↓ [editor revises]
          Draft (back to square one)

ADMIN Flow:
  Draft (editor's work)
      ↓ [admin clicks Publish]
  Approved (immediate, no review needed)
  Audit log: "Admin published directly"
```

#### Implementation Steps

**Step 1: Update content-manager to support submissions**
**Modify `/app/actions/content-manager.ts`:**
```typescript
export async function savePageContent(
  type: string,
  id: string,
  content: string
) {
  const user = await getCurrentUser()
  
  if (user.role === 'admin') {
    // Admin: save and publish immediately
    await updateContent(type, id, content)
    await logAuditEntry(id, user.id, 'published_directly', '')
    return { success: true, message: 'Content published' }
  } else if (user.role === 'editor') {
    // Editor: save as draft, submit for review
    await updateContent(type, id, content) // Save draft
    await submitForReview(type, id, user.id) // Create submission record
    return { success: true, message: 'Submitted for review' }
  } else {
    return { success: false, error: 'Insufficient permissions' }
  }
}
```

**Step 2: Create database functions in `/lib/db.ts`**
```typescript
export async function submitForReview(type: string, id: string, userId: string)
export async function getPendingReviews(limit = 20)
export async function approveSubmission(submissionId: string, adminId: string, comments: string)
export async function rejectSubmission(submissionId: string, adminId: string, comments: string)
export async function publishApprovedContent(type: string, id: string)
export async function getAuditLog(type: string, id: string)
```

**Step 3: Create email templates in `/lib/email-templates.ts`**
```typescript
export function reviewSubmittedTemplate(editor: User, contentTitle: string)
  // Sent to admin: "New content waiting for review"

export function reviewApprovedTemplate(editor: User, contentTitle: string)
  // Sent to editor: "Your content is approved and live"

export function reviewRejectedTemplate(editor: User, contentTitle: string, feedback: string)
  // Sent to editor: "Your content was rejected. Feedback: ..."
```

**Step 4: Create reviewer dashboard**
**Create `/app/admin/reviews/page.tsx`:**
```typescript
// Server component
// Shows:
// - "5 pending reviews" banner
// - Tab navigation: All | Pending | Approved | Rejected
// - List of submissions with:
//   - Content title + type
//   - Submitted by (editor name)
//   - Submitted at (timestamp)
//   - Status badge
// - Link to detail page for each
```

**Step 5: Create review detail page**
**Create `/app/admin/reviews/[id]/page.tsx`:**
```typescript
// Shows:
// - Content title, type, submitted by, submitted at
// - Full content preview
// - Approve / Reject buttons
// - Comment textarea for feedback
// - Audit log timeline at bottom
//   - "Submitted by Editor Name at 2:15 PM"
//   - "Rejected by Admin Name at 2:45 PM: Content needs more citations"
```

**Step 6: Create action handlers**
**Create `/app/actions/reviews.ts`:**
```typescript
export async function approveSubmission(submissionId: string, comments: string)
export async function rejectSubmission(submissionId: string, comments: string)
// Both must:
// - Verify caller is admin
// - Update submission status
// - Log to audit table
// - Send email to editor
```

**Step 7: Integrate into content-manager UI**
**Modify `/app/admin/content-manager/topics/page.tsx`:**
- Add "Reviews" tab or link in sidebar
- Show pending count badge
- Link to `/admin/reviews`

#### Critical Files to Create/Modify
| File | Action | Purpose |
|------|--------|---------|
| `/database/schema.sql` | MODIFY | Add content_submissions & review_audit_log tables |
| `/lib/db.ts` | MODIFY | Add all review workflow database functions |
| `/lib/email-templates.ts` | CREATE | Email templates for review notifications |
| `/lib/email.ts` | MODIFY | Add sendReviewNotification() functions |
| `/app/actions/content-manager.ts` | MODIFY | Integrate submission logic into save |
| `/app/actions/reviews.ts` | CREATE | Approve/reject handlers |
| `/app/admin/reviews/page.tsx` | CREATE | Reviewer dashboard |
| `/app/admin/reviews/[id]/page.tsx` | CREATE | Review detail view |
| `/app/admin/AdminLayoutClient.tsx` | MODIFY | Add link to Reviews in sidebar |

---

## KEY DECISIONS & GOTCHAS

### Decision 1: Should Admins Bypass Review?
**Current design:** Yes, admins publish immediately  
**Rationale:** Streamlines editorial workflow; admins are trusted  
**Alternative:** All content goes through review queue (slower but more transparent)  
**Recommendation:** Keep current design; can add "admin approval required" option later

### Decision 2: What About Concurrent Edits?
**Current state:** Not handled; last save wins  
**Impact:** Two editors editing same draft simultaneously will cause data loss  
**Recommendation (for future):** Add `locked_by` field or use optimistic locking  
**For now:** Document this as a known limitation

### Decision 3: How to Handle Rejected Content?
**Current design:** Returns to draft status; all previous edits preserved  
**Alternative:** Create version branches (more complex)  
**Recommendation:** Keep current design for now

### Gotcha 1: JWT Token Refresh
**Issue:** Users who logged in before Task 1 won't have role in their JWT  
**Solution:** Their token expires (24-48h depending on config) and they re-login  
**Workaround:** Force logout in deployment message

### Gotcha 2: Email Reliability
**Issue:** Resend API keys not set in production  
**Impact:** Review notifications won't send  
**Action needed:** Before deploying Task 2, ensure RESEND_API_KEY is in Vercel env vars

### Gotcha 3: Database Migrations
**Issue:** Schema changes must be idempotent (can run multiple times safely)  
**Action:** Use `CREATE TABLE IF NOT EXISTS` and `CREATE INDEX IF NOT EXISTS`

---

## QUICK FIXES NEEDED (Before Handoff)

1. **Set Resend environment variables** (5 min)
   - Go to Vercel dashboard > Settings > Environment Variables
   - Add: `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_REPLY_TO`, `NOTIFY_EMAIL`
   - Redeploy

2. **Test email system** (10 min)
   - Trigger request-topic form
   - Check inbox for admin notification
   - Verify email contains topic details

3. **Document current admin access** (5 min)
   - List who currently has admin access
   - Note that they can currently edit anyone's content

---

## TESTING STRATEGY

### Task 1 Testing
```gherkin
Scenario: Unauthenticated user cannot access admin
  Given I'm not logged in
  When I visit /admin
  Then I'm redirected to login page

Scenario: Admin can access admin dashboard
  Given I'm logged in as admin
  When I visit /admin
  Then I see admin dashboard

Scenario: Editor cannot access admin
  Given I'm logged in as editor (non-admin role)
  When I visit /admin
  Then I'm redirected with error message
```

### Task 2 Testing
```gherkin
Scenario: Editor submits content for review
  Given I'm logged in as editor
  When I edit topic content and click Save
  Then content goes to status=submitted
  And admin receives email notification

Scenario: Admin approves content
  Given I'm logged in as admin
  When I view pending reviews
  And click Approve on a submission
  Then status changes to approved
  And editor receives confirmation email
  And audit log records the approval

Scenario: Admin rejects with feedback
  Given I'm logged in as admin
  When I click Reject with comment "Needs more sources"
  Then status changes to rejected
  And editor email includes the feedback
  And audit log records rejection with comment
```

---

## DEPLOYMENT CHECKLIST

### Before Deploying Task 1
- [ ] `role` column added to `user_profiles` table
- [ ] `/lib/rbac.ts` created with `requireAdmin()` function
- [ ] `/app/admin/layout.tsx` created and wraps all admin routes
- [ ] JWT payload includes role
- [ ] All admin API endpoints check role
- [ ] Test: unauthenticated user redirected from /admin
- [ ] Test: non-admin user redirected from /admin
- [ ] Test: admin can access /admin

### Before Deploying Task 2
- [ ] Task 1 deployed and working in production
- [ ] `content_submissions` table created
- [ ] `review_audit_log` table created
- [ ] Email templates created and tested
- [ ] Reviewer dashboard renders without errors
- [ ] Test: editor can submit for review
- [ ] Test: admin can approve submission
- [ ] Test: editor receives notification email
- [ ] Test: audit log records all actions

---

## RECOMMENDED READING FOR CONTEXT

**In codebase:**
- `/lib/auth.ts` — JWT implementation (understand before Task 1)
- `/app/admin/content-manager/topics/topic-editor.tsx` — how content is edited
- `/app/actions/content-manager.ts` — content save logic
- `/lib/email.ts` — email integration template
- `/database/schema.sql` — full schema

**Reference:**
- Next.js middleware docs (for auth patterns)
- Vercel Postgres docs (for schema management)

---

## SUCCESS CRITERIA

### Task 1 Complete When
✅ Admin routes are protected  
✅ Only authenticated admins can access `/admin`  
✅ Role persists across sessions  
✅ Non-admins receive clear error message  

### Task 2 Complete When
✅ Editors can submit content for review  
✅ Admins can view/approve/reject submissions  
✅ Rejected content returns to draft with feedback  
✅ Approved content goes live automatically  
✅ Audit log tracks all changes  
✅ Email notifications sent for all state changes  

---

## QUESTIONS FOR CLARIFICATION

Before starting, Opus should verify:

1. **Admin auto-approval:** Should admins' own edits bypass review? (Recommended: yes)
2. **Reviewer permissions:** Should moderators also review, or only admins? (Recommended: both, configurable)
3. **Notification schedule:** Send emails immediately or batch daily digest? (Recommended: immediate)
4. **Content types:** Only topics, or also learning-paths, lessons, etc.? (Recommended: all content types)
5. **Versioning:** Do editors see version history of rejections? (Recommended: yes, in audit log)

---

## CONTACT & HANDOFF

**Questions about this briefing?** Refer back to status sections above.  
**Ready to implement?** Start with Task 1 (admin access control), then Task 2 (review workflow).  
**Deployment?** Follow checklist above; deploy Task 1 first, verify in production, then deploy Task 2.

**Good luck! This is a well-scoped, high-value feature set.** 🚀
