<p align="center">
  <a href="https://chapatizretro.com"><img alt="Chapatiz Retro" src="assets/img/logo.svg" /></a><br>
  <a href="https://chzretro-front.web.app"><img alt="Deployment to Firebase" src="https://img.shields.io/github/workflow/status/tigriz/chzretro-front/Deploy%20to%20Firebase%20Hosting%20on%20merge?label=preview&logo=firebase"></a><br>
  <a href="http://www.gnu.org/licenses/gpl-3.0" target="_blank"><img alt="License GPL v3" src="https://img.shields.io/badge/license-GPL%20v3-blue.svg" /></a>
  <img alt="Package version" src="https://img.shields.io/github/package-json/v/tigriz/chzretro-front" />
  <a href="https://github.com/Tigriz/chzretro-front/actions/workflows/codeql-analysis.yml"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/tigriz/chzretro-front/CodeQL?label=quality"></a>
  <a href="https://github.com/Tigriz/chzretro-front/issues"><img alt="Number of issues" src="https://img.shields.io/github/issues/Tigriz/chzretro-front" /></a>
</p>

# Contributions

Please see [project kanban](https://github.com/Tigriz/chzretro-front/projects/1), to-do tasks.

# Conventions

Folders' name is singular (excepted `locales` because vue-i18n hardcoded it).  
Routes are plural if they have subroutes (`/games`).  
Use snake_case for files : replace whitespaces " " with **underscores "_"** in filenames.  
Vue files (`*.vue`) begin with an uppercase letter and use PascalCase.

# Branches

One branch per feature.  
Fork and PR are appreciated.

# Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

# Dependencies
- vue-router
- vuex
- vue-i18n
- axios
- date-fns
- marked
- mitt
- katex
- highlight.js
- v-lazy-image

# Useful tools
## VS Extensions
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) formatter  
[i18n ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally): a **<ins>must-have</ins>**  if you're doing i18n

## SVG
[SVG Animation editor](http://anigen.org/versions/0_8_1/)  
[SVG Path editor](https://yqnn.github.io/svg-path-editor/)  
[Inkscape](https://inkscape.org/)

## Vue doc
[Vue](https://v3.vuejs.org/)  
[Vue Router](https://next.router.vuejs.org/)  
[Vuex](https://next.vuex.vuejs.org/)  
[Vue Meta](https://vue-meta.nuxtjs.org/)