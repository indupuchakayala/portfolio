# Your Portfolio — Angular + Node.js

A two-part project:
- `backend/` — Express API (project data, experience, skills, contact form emailer)
- `frontend/` — Angular 18 standalone-component app (dark "code editor" theme)

## 1. Run it locally

**Backend**
```bash
cd backend
npm install
cp .env.example .env
# edit .env: add your Gmail address + an App Password (https://myaccount.google.com/apppasswords)
npm run dev
```
Runs on http://localhost:4000. Check http://localhost:4000/api/health to confirm it's up.

**Frontend**
```bash
cd frontend
npm install
npm start
```
Runs on http://localhost:4200 and calls the backend automatically in dev mode.

## 2. Make it yours (do this before deploying)

- `backend/data/projects.js` — swap in your 3-6 real projects
- `backend/data/experience.js` — your real roles
- `backend/data/skills.js` — your real stack
- `frontend/src/app/components/hero/hero.component.ts` — name, tagline, phrases
- `frontend/src/app/components/about/about.component.ts` — your real bio
- `frontend/src/app/components/footer/footer.component.ts` and `navbar.component.ts` — your GitHub/LinkedIn links
- Add project screenshots to `frontend/src/assets/projects/`
- Add your resume PDF at `frontend/public/assets/resume.pdf`
- Add a 1200x630px `og-image.png` to `frontend/public/assets/` — this is the preview image LinkedIn shows when you share the link
- Replace `favicon.ico` in `frontend/public/`

## 3. Deploy (all free tiers)

1. Push the whole repo to GitHub (backend/ and frontend/ folders together)
2. **Backend → Render**: New Web Service → connect repo → Root Directory `backend` → build command `npm install`, start command `npm start` → add the same env vars from `.env` in Render's dashboard
3. **Frontend → Vercel**: New Project → connect repo → Root Directory `frontend` → framework preset "Angular" → before deploying, update `frontend/src/environments/environment.prod.ts` with your live Render URL