# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.3.0](https://github.com/getvinch/vinch/compare/v0.2.0...v0.3.0) (2019-10-19)


### Bug Fixes

* **firebase:** clean up imports and fix issue with tests ([4f8a91c](https://github.com/getvinch/vinch/commit/4f8a91c))


### Features

* **boards:** add display components for boards ([ab783e7](https://github.com/getvinch/vinch/commit/ab783e7))
* **boards:** add story for <Boards /> ([7a5109c](https://github.com/getvinch/vinch/commit/7a5109c))
* **boards:** hook up boards to query for groups ([b06df4a](https://github.com/getvinch/vinch/commit/b06df4a))
* **firebase:** pass in loader component for initializing ([5da8de7](https://github.com/getvinch/vinch/commit/5da8de7))
* **firebase:** rename loader node ([6735053](https://github.com/getvinch/vinch/commit/6735053))
* **firebase:** return null until firebase is initialized ([b757799](https://github.com/getvinch/vinch/commit/b757799))
* **hooks:** create useFirestoreQuery ([f13a2d1](https://github.com/getvinch/vinch/commit/f13a2d1))
* **hooks:** enable real time data updates in useFirestoreQuery ([dad875e](https://github.com/getvinch/vinch/commit/dad875e))
* **hooks:** ensure correct passed type from queryResult ([56f7421](https://github.com/getvinch/vinch/commit/56f7421))
* **hooks:** rename groups type "project" to "boards" ([7b4d4ff](https://github.com/getvinch/vinch/commit/7b4d4ff))


### Tests

* **boards:** add testing library and tests for Boards ([8d38ce6](https://github.com/getvinch/vinch/commit/8d38ce6))
* **hooks:** add tests for useGroups ([3d77ecc](https://github.com/getvinch/vinch/commit/3d77ecc))
* **hooks:** add tests to useFirestoreQuery ([e0e7b87](https://github.com/getvinch/vinch/commit/e0e7b87))
* **hooks:** clear mocks in useFireStoreQuery ([38cea74](https://github.com/getvinch/vinch/commit/38cea74))
* **hooks:** prevent firebase from hanging ([d3f4e93](https://github.com/getvinch/vinch/commit/d3f4e93))



## 0.2.0 (2019-10-16)


### Bug Fixes

* **package:** undo prettier of package.json ([2ca22ff](https://github.com/getvinch/vinch/commit/2ca22ff))


### Features

* **app:** render CssBaseline (normalize) ([d18b1d9](https://github.com/getvinch/vinch/commit/d18b1d9))
* **app:** render Header in App ([ede011f](https://github.com/getvinch/vinch/commit/ede011f))
* **components:** add Header, which renders AppBar ([19a1b07](https://github.com/getvinch/vinch/commit/19a1b07))
* **firebase:** create firebase provider and context ([274cd4e](https://github.com/getvinch/vinch/commit/274cd4e))
* **public:** load Roboto font and Material icons in `index.html` ([3c75fc5](https://github.com/getvinch/vinch/commit/3c75fc5))
* **public:** set responsive viewport meta tag in `index.html` ([3ffa559](https://github.com/getvinch/vinch/commit/3ffa559))
* **public:** update title and meta description in `index.html` ([77eee18](https://github.com/getvinch/vinch/commit/77eee18))
