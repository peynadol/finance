# Personal Finance App 

This is a personal finance tracker built with **Next.js**, **TypeScript**, and **Supabase**, inspired by a Frontend Mentor design.

You can use it to:
- Track your **transactions** (income and expenses)
- Set **budgets** per category
- Create **savings pots** with targets
- Monitor **recurring bills**
- View summaries and visual progress bars

---

## Technologies Used

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS v4**
- **ShadCN** (UI components)
- **Zustand** for local state (modal management, UI state)
- **TanStack Table** for sorting, filtering, and pagination
- **Supabase** as a backend (auth-free for now)
- **Zod** for schema validation
- **Playwright** for E2E testing
- **Vitest + React Testing Library** for unit/component tests

---

## Live Demo

[Check it out on Vercel](https://github.com/peynadol/finance)

---

## Things I Struggled With

- **TypeScript**: I ran into issues inferring types across modals and dynamic forms. Some things are typed with `as`, and I plan to improve this using discriminated unions or more refined Zod schemas.
- **Modal state**: My Zustand modal store passes around `modalData` as `unknown`, which works but isn't ideal long term.
- **TS breaking deployment/tests**: Some changes caused failing builds or Playwright tests due to incomplete typing. I'm working on making those more resilient.

---

## Things I’d Like to Add

- **Drag and drop** to reorder savings pots
- **Authentication** and multi-user support
- A scheduled job (via Supabase Edge Function or external cron) to reset all data every 24 hours to preserve the demo experience.


---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/peynadol/finance
cd finance

# Install dependencies
npm install

# Run locally
npm run dev
```
