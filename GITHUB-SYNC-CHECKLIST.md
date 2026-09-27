# Pre-sync checklist — get this project onto GitHub safely

Work down this list before you connect the project to GitHub
(**+** in the chat box → **GitHub** → **Connect project**).
Each item was last checked on **27 Sep 2026**. Anything marked
**⚠ needs you** is something only you can decide or do.

---

## 1. Photos — the thing most likely to break

The five photos of her and the bouquet are now **real image files inside the
project**, imported directly, so a copy of this repo on any computer shows the
same pictures. (They used to be small "pointer" notes that only Lovable's own
hosting could read — those notes are gone.)

- [x] `src/assets/photos/eyes.jpg` — 130 KB — 899×1599 — loads
- [x] `src/assets/photos/selfie.jpg` — 124 KB — 960×1280 — loads
- [x] `src/assets/photos/cardigan.jpg` — 89 KB — 720×1280 — loads
- [x] `src/assets/photos/cafe.jpg` — 139 KB — 720×1280 — loads
- [x] `src/assets/photos/juice.jpg` — 169 KB — 924×1280 — loads
- [x] `src/assets/roses.png` — 1.6 MB — 912×1104 — loads (painted bouquet)
- [x] No leftover `.asset.json` pointer files in `src/assets/`
- [x] Whole page scrolled top to bottom: all 6 images display, console clean

**⚠ needs you:** the bouquet is a *painting*, not a photo. If you'd rather it
be real flowers, say so before syncing — it changes the one colour on the page.

---

## 2. Secrets & private information

Nothing here can leak a password, because there is nothing stored: no login, no
database, no payment setup, no API keys.

- [x] No `.env` files in the project
- [x] No keys, tokens or passwords anywhere in `src/`
- [x] No backend, database or user accounts to protect
- [x] Page tells search engines not to index it (`noindex, nofollow`)
- [ ] **⚠ needs you: choose a PRIVATE repository.** This page is about a real,
      named person and is meant for her alone. A public repo means anyone can
      read it, and GitHub copies are hard to fully erase.
- [ ] **⚠ needs you:** read the letter once more end to end. Anything you wrote
      should be yours — lines were drafted for you and are easy to change.

To re-check for secrets yourself, from the project folder:

```sh
ls -a | grep -i env        # expect: nothing
grep -rniE "api[_-]?key|secret|password|token" src   # expect: nothing meaningful
```

---

## 3. Important files — what must be in the repo

- [x] `src/routes/index.tsx` — the whole letter, in order
- [x] `src/routes/__root.tsx` — handwriting/serif fonts + page title and preview text
- [x] `src/styles.css` — the paper/ink palette, the pink-rose exception, all the look
- [x] `src/components/Stickers.tsx` — the hand-drawn doodles
- [x] `src/components/Reveal.tsx` — the fade-in as you scroll
- [x] `src/assets/photos/*` + `src/assets/roses.png` — the pictures (section 1)
- [x] `package.json` + `bun.lock` — the list of libraries and their exact versions
- [x] `vite.config.ts`, `tsconfig.json`, `eslint.config.js`, `.prettierrc`, `components.json`
- [x] `public/favicon.ico`, `public/robots.txt`

Safe to leave out (already excluded automatically): `node_modules`, `dist`,
build caches, logs, Lovable's own working folder `.workspace`.

- [x] `.lovable/project.json` — Lovable's project metadata. Expected in the repo;
      leave it, it keeps the two-way sync working.
- [ ] **⚠ needs you:** `README.md` is still Lovable's generic welcome text.
      A line or two about what this page actually is would make the repo feel
      like yours — I can write it, or you can.

---

## 4. Proves it works away from Lovable

Run these from the project folder. This is what you'd do on your own laptop
after cloning from GitHub — if it passes, the repo is genuinely self-contained.

```sh
npm install     # or: bun install
npm run dev     # or: bun run dev
npm run build   # final proof, expect "✓ built in ..." with no errors
```

- [x] Dev server starts, letter opens
- [x] Every photo and the bouquet visible while scrolling
- [x] Production build succeeds
- [x] Build output contains all 6 image files and **no** Lovable-only `/__l5e/` paths
- [x] No browser console errors, no sideways scrolling on a phone

---

## 5. Small tidy-ups before the first push

- [ ] `tsconfig.tsbuildinfo` is a local build cache. If it appears as an
      untracked file after you clone, add one line — `tsconfig.tsbuildinfo` —
      to `.gitignore`. (I couldn't edit `.gitignore` from here; it's read-only.)
- [ ] Decide the repository name (`subu`, `23-08-26`, `a-letter-for-subu`…).
- [ ] Decide private (recommended) or public.

---

## 6. Connect it

1. In Lovable: **+** in the chat box → **GitHub** → **Connect project**.
2. Authorize the Lovable GitHub App when GitHub asks.
3. Choose the account or organization the repo should live in.
4. **Create Repository** — the full codebase is pushed for you.

## 7. After the push, confirm it landed

- [ ] Repo file tree shows `src/assets/photos/` with five `.jpg` files and
      `src/assets/roses.png`
- [ ] Latest commit message and date look right
- [ ] Clone it somewhere else (or check the repo in a private browser window)
      and run section 4 — the letter should look identical
- [ ] Sync is two-way: a change pushed from your machine shows up back in Lovable
