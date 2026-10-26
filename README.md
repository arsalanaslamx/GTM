# Arsalan Aslam — GTM Advisor Portfolio

A responsive React + TypeScript portfolio for positioning Arsalan Aslam around GTM strategy, sales execution, customer acquisition, and retention.

## Stack
- React
- TypeScript
- Vite
- Lucide React
- GitHub Pages deployment via `gh-pages`

## Before publishing
Update these placeholders in `src/App.tsx`:
- Confirm the contact email and LinkedIn profile URL in `src/App.tsx`.
- Verify every metric, attribution, and measurement period before making the site public.
- Consider adding a professional portrait and a custom favicon.

## Local development
Requires a recent Node.js LTS release.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `arsalan-gtm-portfolio`.
2. Ensure the `base` in `vite.config.ts` is `/arsalan-gtm-portfolio/`. If you use a different repository name, change it to `/<your-repository-name>/`.
3. Commit and push the project.
4. Run:

```bash
npm run deploy
```

5. In GitHub, open **Settings → Pages** and select the `gh-pages` branch as the deployment source if it is not already selected.
6. Wait for the deployment to finish. The project site should be available at:
   `https://YOUR-GITHUB-USERNAME.github.io/arsalan-gtm-portfolio/`

### If your repository is `YOUR-GITHUB-USERNAME.github.io`
That is a GitHub user site. Change `base` in `vite.config.ts` to `/` instead.

## Alternative: deploy with GitHub Actions
You can instead configure GitHub Actions to build and deploy `dist` to Pages. If you choose this method, set the repository's Pages source to **GitHub Actions** and use a Vite-aware workflow. Do not use both deployment methods unless you deliberately configure them.

## Content integrity
The case studies distinguish historical experience from proposed advisory capabilities. Confirm all results, attribution, and measurement periods before publishing. The GTM diagnostic is a preliminary self-assessment and does not claim to be a validated audit.

## Project structure

```text
src/
  App.tsx       Main page and diagnostic interactions
  main.tsx      React entry point
  styles.css    Responsive visual system
index.html      SEO and social metadata
vite.config.ts  Vite and GitHub Pages base path
```
