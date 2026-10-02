# Shreya Jash — Portfolio

A responsive React portfolio focused on automation, AI workflows, and observability. The page includes an introduction, skills with icons, an experience timeline, education and leadership, and contact options.

## Run locally

Install dependencies with `npm install`, then run `npm run dev`. Open the local URL printed by Vite.

## Checks

- `npm run lint` — ESLint checks.
- `npm run build` — production build in `dist`.
- `npm run preview` — preview the production build.

## Update content

Edit `src/data/profile.js` for profile links, skills, experience, and education. Skill icons are mapped in `src/pages/Skills.jsx`. The animated background lives in `src/App.css`.

The contact form uses the existing NoCodeAPI endpoint in `src/pages/Contact.jsx`; direct email and social links are also available. Browser verification uses simulated responses without submitting messages to that service.
