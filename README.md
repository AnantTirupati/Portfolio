# Anant Tirupati — Portfolio

Personal portfolio website showcasing projects, skills, and contact information.

Built with Next.js, TypeScript and Tailwind CSS. The site features a compact command-center layout, interactive widgets, and a responsive design.

**Live demo:** Deploy this repository to Vercel for an instant preview.

**Tech stack:** Next.js, React, TypeScript, Tailwind CSS

## Features

- Home dashboard with an overview and quick links
- Skills page listing technical proficiencies
- Logs page (activity / notes)
- Loadout page for tools / projects
- Reusable components: `CommandCenterLayout`, `TerminalWidget`, `ContactModal`, `Sidebar`, `TopNavbar`, `Footer`

## Local development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
npm start
```

## Project structure

- `src/app/` — app routes and pages
- `src/components/` — shared UI components (see `CommandCenterLayout.tsx`, `TerminalWidget.tsx`, `ContactModal.tsx`)
- `public/` — static assets

## Deploy

Recommended: Vercel (automatic Next.js support). Connect your GitHub repo and deploy the `main` branch.

## Contributing

If you'd like to contribute or suggest changes, open an issue or submit a pull request.

## Contact

Want to reach out? Use the contact modal on the site or open an issue on this repository.

---

Created by Anant Tirupati.
