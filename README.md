# Components Library

A collection of 20 Vue 3 UI components (buttons, inputs, dropdown, modal, tabs, pagination, toast, tooltip, cards…), each documented in Storybook and tested in a real browser.

**Live demo:** [emmanuelplougoulm.github.io/components_library/storybook](https://emmanuelplougoulm.github.io/components_library/storybook/)

## Stack

- **Vue 3** + TypeScript
- **Storybook 8** for documentation and visual review
- **Astro** for the landing page that showcases each component
- **Vite**, Prettier
- **GitHub Actions** → GitHub Pages for deployment

## Tests

Stories double as test cases: the Storybook Vitest plugin turns every story into a test that runs in headless Chromium through **Vitest browser mode** + Playwright.

```bash
npm install
npx playwright install chromium
npx vitest
```

## Run locally

```bash
npm run storybook   # Storybook on http://localhost:6006
npm run dev         # Astro landing page
```

## Credits

The component designs come from [GreatFrontEnd](https://www.greatfrontend.com/) challenges. Commits implementing them are prefixed with `[GFE]`. The implementation, stories and tests are my own.
