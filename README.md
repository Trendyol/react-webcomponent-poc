# react-webcomponent-poc
This repository demonstrates a simple way of setting up a SPA with React/Redux/RxJS/Typescript. Before adopting a different solution, we were using it to embed our React SPA into a Vue application.

Web Components API was used instead of iframes to re-use existing functionality in the Vue panel with sync calls. When built, this SPA can be used as `<seller-store-editor />` inside your HTML page. See [development/index.ejs](./development/index.ejs) for example.

## Summary
Run `npm start` and go to the URL that is printed to the screen. You will see a page that prints your IP to the screen and refreshes it every 1 minute. This page demonstrates managing side effects with redux-observable. You can use the buttons on the page to change your locale. Or change to the other page where you will see a simple counter with redux implemented.

## Features
- Shadow DOM for CSS encapsulation
- Redux routing with react-router
- Exposed as Custom Elements
- Hook/FormattedMessage based localization
- Redux with redux-observable for managing side effects
- Unit tests for side-effects/pure components
- Environment based configuration
- Automatic linting with TSLint and Prettier

## Structure
```
.
├── config # environment based configuration files
├── development # webpack config and html file for local development
└── src
    ├── components       # pure components with html/css
    ├── containers       # components connected to redux
    ├── services         # API, Utility services
    ├── store            # redux store registration and root types
    ├── translations     # translation files for different languages
    ├── polyfill.ts      # polyfills for intl
    ├── webcomponent.tsx # rendering SPA to custom element in shadow DOM
    └── register.ts      # entrypoint to expose the webcomponent
```

## Commands
- `npm start` starts a local working environment with webpack-dev-server 
- `npm run build` builds and outputs JS files prepend with `PROFILE=dev` e.g. to build with different configs
- `npm run test` runs all unit tests
- `npm run format` formats project source code with tslint and prettier
