# tpm_assignment

### Add Project

- Route: `src/views/AddProject.vue` (not linked in the app)
- Purpose: Generate new project objects for `src/data/projects.js` without a backend

This is a small internal utility view to help maintain the project list.

#### Usage

1. Navigate to `/add-project`.
2. Fill out the form (Pathway, Repository Link, Description).
3. Click **Generate Project Object**.
4. The generated JavaScript object is displayed on screen and logged to the browser console.
5. Click **Copy to Clipboard** and paste the object into `src/data/projects.js`.

Example console output:

```js
{
  id: 1767897128742,
  pathway: 'webDev',
  repoLink: 'https://github.com/Code-You-Contributors/TPM-Assignment-Website',
  description: 'Example project'
},
```
---

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
