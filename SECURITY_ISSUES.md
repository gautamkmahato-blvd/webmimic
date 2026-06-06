# my-app Security Issues

Security audit findings from API routes, auth/quota helpers, Cursor/OpenRouter services, and middleware.

**Audit date:** 2026-05-20

---

## Critical

### 1. ~~`POST /api/test-qwen-reasoning` is fully public~~ ✅ Fixed

- **Location:** `app/api/test-qwen-reasoning/route.ts`
- **Issue:** No authentication, no rate limiting. Fans out to multiple OpenRouter models (Qwen, Kimi, Gemini, Grok, etc.).
- **Impact:** Anyone who can reach the deployment can burn API spend and CPU.

### 2. ~~`POST /api/convert-design-md` is fully public~~ ✅ Fixed

- **Location:** `app/api/convert-design-md/route.ts`
- **Issue:** No authentication, no rate limiting. Accepts up to ~2M characters of markdown per request.
- **Impact:** DoS / resource abuse.

---

## High

### 3. ~~Server-side SSRF in Cursor services~~ ✅ Fixed

- **Location:** `app/service/cursor/cursorVideoAnalysis.ts`, `app/service/cursor/cursorRecreateComponent.ts`
- **Issue:** `fetch()` is called on client-supplied `videoUrl`, `imageUrl`, and `screenshotUrl` with no host allowlist.
- **Exploitable via:** `POST /api/analyze-video`, `POST /api/recreate-from-screenshot` (after quota reservation).
- **Impact:** Can reach internal IPs, cloud metadata endpoints, etc.

### 4. ~~Expensive extension LLM routes lack quota enforcement~~ ✅ Fixed

- **Location:** `app/api/gemini-3-evidence/route.ts`, `app/api/analyze-design-system/route.ts`, `app/api/curate/route.ts` (LLM path)
- **Issue:** Only require extension JWT + rate limit (5 req / 10s). Do **not** call `reserveQuota`.
- **Impact:** Free accounts can repeatedly trigger costly OpenRouter/Gemini calls within rate limits.

### 5. ~~`analyze-design-system` accepts huge payloads~~ ✅ Fixed

- **Location:** `app/api/analyze-design-system/route.ts`
- **Issue:** `MAX_PROMPT_CHARS = 5_000_000` plus arbitrary `desktopScreenshotUrl` / `mobileScreenshotUrl` passed to OpenRouter as `image_url` with no URL allowlist.

### 6. ~~`curate` LLM path has no body size cap~~ ✅ Fixed

- **Location:** `app/api/curate/route.ts`
- **Issue:** Unbounded `body.prompt` string sent to DeepSeek/OpenRouter.

### 7. ~~`requirePremiumExtension()` is never used~~ ✅ Fixed

- **Location:** `lib/extension-route-helpers.ts`
- **Issue:** Defined but no route calls it. Premium gating for expensive extension features is not enforced server-side on LLM routes.

### 8. Missing `/api/reconstruct`

- **Issue:** The extension background proxies reconstruction to `/api/reconstruct`, but the route does not exist in my-app.
- **Impact:** Broken endpoint today; if added later without auth/quota, it would be a high-risk surface.

---

## Medium

### 9. ~~`checkAssetSaveLimit` fails open~~ ✅ Fixed

- **Location:** `app/service/supabase/assets/checkAssetSaveLimit.ts`
- **Issue:** On DB lookup/count errors it returns `allowed: true`.
- **Impact:** Asset save limits can be bypassed during outages or DB issues.

### 10. ~~Legacy quota mapping is permissive~~ ✅ Fixed

- **Location:** `app/service/supabase/extension/operationQuotaService.ts`
- **Issue:** Unknown/null `plan_id` or null `plan_type` maps to **PRO** quotas.
- **Impact:** Misconfigured or stale `user_credits` rows get generous limits instead of failing closed.



### 14. ~~Cloudinary upload abuse~~ ✅ Fixed

- **Location:** `app/api/upload-evidence-tile/route.ts`, `app/api/upload-video/route.ts`
- **Issue:** Extension JWT + rate limit only; no quota or per-user storage cap.
- **Impact:** Cloudinary cost/storage abuse.

### 15. ~~`upload-video` size limit is weak~~ ✅ Fixed

- **Location:** `lib/validation/schemas.ts` (`UploadVideoSchema`)
- **Issue:** Schema caps base64 string at 10M characters; decoded binary can be much larger.
- **Impact:** Memory pressure before upload.

### 16. ~~Dev CORS wildcard~~ ✅ Fixed

- **Location:** `lib/extension-route-helpers.ts`
- **Issue:** When `EXTENSION_CHROME_ID` is unset and `NODE_ENV !== 'production'`, `getExtensionCorsHeaders()` returns `Access-Control-Allow-Origin: *`.

### 17. ~~Static `EXTENSION_CORS_HEADERS` on several routes~~ ✅ Fixed

- **Location:** e.g. `app/api/gemini-3-evidence/route.ts`, `app/api/upload-evidence-tile/route.ts`
- **Issue:** Module-level CORS headers without the request; dev `OPTIONS` may not match the caller's `X-Extension-Id`.

### 18. ~~`AnalyzeVideoSchema` URLs not validated as URLs~~ ✅ Fixed (prior pass)

- **Location:** `lib/validation/schemas.ts`
- **Issue:** `videoUrl` / `imageUrl` are `requiredString(2048)`, not `z.string().url()`, so non-URL strings still reach server-side `fetch()` in the Cursor path.

### 19. ~~Extension JWT has no server-side revocation~~ ✅ Fixed

- **Location:** `app/api/extension/issue-token/route.ts`, `app/api/refresh-extension-token/route.ts`
- **Issue:** ~24h TTL; stolen token remains valid until expiry even after Clerk sign-out. Refresh re-issues while still valid.


---

## Low / Informational

### 24. ~~`issue-token` audience from `X-Extension-Id`~~ ✅ Fixed

- **Location:** `app/api/extension/issue-token/route.ts`, `lib/extension-jwt.ts`
- **Issue:** Any signed-in user can mint a JWT scoped to whatever extension ID they send (intended for unpacked dev builds; widens token audience surface).

### 25. ~~JWT `plan` claim is informational~~ ✅ Fixed

- **Issue:** Server re-checks premium on refresh/issue; not a vulnerability if routes never trust `plan` alone (most don't).

### 26. ~~`quota/confirm` returns 200 for `not_found`~~ ✅ Fixed

- **Location:** `app/api/quota/confirm/route.ts`
- **Issue:** Intentional idempotency; slightly obscures whether a reservation existed.

### 27. `dangerouslySetInnerHTML` in Motion modal

- **Location:** `app/(pages)/motion/_components/ComponentModal.tsx`
- **Issue:** Shiki-highlighted code from Supabase storage; risk depends on integrity of stored motion code.

### 28. Design editor preview uses `innerHTML` in sandboxed iframe

- **Location:** `lib/design-editor/buildSrcdoc.ts`
- **Issue:** Allows `unsafe-inline` scripts and external Tailwind CDN inside the preview frame.

### 29. ~~`EXTENSION_CHROME_ID` unset in production~~ ✅ Fixed

- **Location:** `lib/extension-route-helpers.ts`
- **Issue:** CORS origin becomes `null`; logged warning, but extension API calls from wrong origins may fail rather than being explicitly denied with a clear policy.

### 30. `.env` present locally

- **Issue:** `.gitignore` covers `.env*`; ensure it is never committed (file is on disk with many secrets).

---

## What is in good shape

- Polar production webhook (Svix-style verification + billing reconciliation)
- Clerk webhook Svix verification
- Extension JWT RS256 with `aud` / `iss` checks
- `analyze-video` and `recreate-from-screenshot` validate body then `reserveQuota` + confirm/rollback
- Client `quota/rollback` correctly forbidden
- `plans/subscribe` blocked in production
- Design Chat slug reads have path traversal protection
- Checkout redirect URL origin validation
- `deduct-credits` validates operation against allowlist

---

## Recommended fix priority

1. Auth-gate or remove `test-qwen-reasoning` and `convert-design-md` in production.
2. Add `reserveQuota` (or premium checks) on `gemini-3-evidence`, `analyze-design-system`, and `curate`.
3. SSRF allowlists on Cursor URL fetches (Cloudinary / trusted HTTPS hosts only).
4. Implement or remove `/api/reconstruct` with proper auth + quota controls.
5. Fail closed in `checkAssetSaveLimit` on DB errors.
6. Remove or gate `polar-test` webhook in production.
7. Wire `requirePremiumExtension` or inline premium checks on expensive extension routes.
8. Tighten Design Chat / analyze-design-system image URL validation.
