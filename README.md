# ParentAlly — AI Parenting Companion

## Project Structure

```
parentally-project/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── assets/         # Images
│   │   ├── components/     # UI components
│   │   │   ├── ui/         # Shadcn base components
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── PrinciplesSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   └── Index.tsx
│   │   ├── index.css        # Design system tokens
│   │   └── main.tsx
│   ├── tailwind.config.ts
│   ├── vite.config.ts
│   └── package.json
│
├── backend/           # Express + TypeScript API
│   ├── src/
│   │   ├── routes/
│   │   │   └── waitlist.ts
│   │   └── index.ts
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
│
└── README.md
```

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
# Opens at http://localhost:5173
```

### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
# Runs at http://localhost:3001
```

## Tech Stack

**Frontend:** React 18, Vite 5, TypeScript, Tailwind CSS v3, Shadcn/UI, Lucide Icons  
**Backend:** Express.js, TypeScript, CORS  
**Fonts:** Outfit (headings), Figtree (body)  
**Colors:** Sky & Peach palette

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/waitlist` | Join waitlist (body: `{ email }`) |
| GET | `/api/waitlist/count` | Get waitlist count |
