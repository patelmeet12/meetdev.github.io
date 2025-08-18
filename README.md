# TypeScript GitHub Pages Starter

This repository shows how to use TypeScript for a website hosted with GitHub Pages.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Build TypeScript**

   ```bash
   npm run build
   ```

3. **Test locally**

   ```bash
   npm start
   ```

4. **Deploy**

   - Commit and push all files to your repository.
   - In your GitHub repo, go to **Settings > Pages** and set the source to the root directory (or `/`).

The main HTML loads the compiled JS from `dist/index.js`.

## Editing

- Write TypeScript in `src/index.ts`.
- Run `npm run build` to update the JS in `dist/`.
