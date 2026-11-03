# Pixsora Design.Co — Homepage (React + Vite)

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL Vite prints in the terminal.

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Netlify
1. Push this project folder to a GitHub repository.
2. Import the repository in Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`

## Updating the portfolio
Images currently live in `public/images/`. Add new image files there, then add a project object to the `projects` array in `src/main.jsx`. The homepage uses reusable project cards, so new work can be added without rebuilding the layout.

## Notes
- This is Phase 1: homepage foundation only. Portfolio, About, Services, and Contact are currently sections linked from the homepage, not separate routes yet.
- The current Sandtech Global images are used as supplied portfolio visuals. Confirm the project title, authorship, and any public client attribution with the designer before launch.
- The contact button currently points to the existing Google Sites page until a preferred WhatsApp number/email/social profile is supplied.
