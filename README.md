# vinch

[![build](https://github.com/getvinch/vinch/actions/workflows/build.yml/badge.svg)](https://github.com/getvinch/vinch/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/getvinch/vinch/badge.svg?branch=master)](https://coveralls.io/github/getvinch/vinch?branch=master)
[![Dependency status](https://david-dm.org/getvinch/vinch.svg)](https://david-dm.org/getvinch/vinch)
[![Netlify Status](https://api.netlify.com/api/v1/badges/986629ff-987f-4ef0-b373-6767a4e5a79e/deploy-status)](https://app.netlify.com/sites/vinch/deploys)

Ideate with vinch.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Installation

Clone repository:

```sh
$ git clone https://github.com/getvinch/vinch.git
```

Install dependencies:

```sh
$ yarn
```

## Available Scripts

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn lint`

Lints the files. Run `yarn lint:fix` to fix any errors.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Runs `yarn build:vinch` and `yarn build:storybook`.

### `yarn build:vinch`

Builds the app for production to the `build` folder.

### `yarn build:storybook`

Builds storybook to the `build/storybook` folder.

### `yarn release`

Creates a release by bumping the `package.json`, generating the `CHANGELOG.md`, and performing a Git commit and tag.

### `yarn storybook`

Runs storybook on [http://localhost:9009](http://localhost:9009).

## Contributors

[![Ben Budnevich](https://github.com/benox3.png?size=50)](https://github.com/benox3) &nbsp;&nbsp;
[![remarkablemark](https://github.com/remarkablemark.png?size=50)](https://github.com/remarkablemark)
