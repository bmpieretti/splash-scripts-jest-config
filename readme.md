
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/water.png)](#-pkgname-)

# @splash-plus/jest-config
[![CircleCI](https://circleci.com/gh/bmpieretti/splash-scripts-jest-config.svg?style=svg)](https://circleci.com/gh/bmpieretti/splash-scripts-jest-config)

<br />
Splash config for default jest commands

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/water.png)](#table-of-contents)

## Table of Contents

* [@splash-plus/jest-config](#splash-plusjest-config)
	* [Installing](#installing)
	* [Usage](#usage)
		* [API](#api)
				* [# test](#-test)
				* [# test:watch](#-testwatch)
				* [# test:coverage](#-testcoverage)
	* [Developing](#developing)
		* [Built With](#built-with)
		* [Prerequisites](#prerequisites)
		* [Setting up Dev](#setting-up-dev)
		* [Deploying / Publishing](#deploying--publishing)
		* [Commiting](#commiting)
	* [Versioning](#versioning)
	* [Licensing](#licensing)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/water.png)](#installing)

## Installing

To install this library, install it from npm as a development dependency by running the command below:

```shell
npm i --save-dev @splash-plus/config-jest
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/water.png)](#usage)

## Usage

To run this module, import the module into a project using [splash-scripts](https://github.com/bmpieretti/splash-scripts), and extend it from the extends field inside a splash config file:

``` js
// splash.config.js
{
  extends: ['splash-scripts-jest-config'],
  ...
}
```

### API

#### # test
```
splash-scripts test
```

Runs all tests withing the current directory using the config defined in this package.

**Note** All commands support additional passed in arguments via simply appending them to the splash-scripts call: `splash-scripts [command] [...options]`

#### # test:watch
```
splash-scripts test:watch
```

Runs all tests withing the current directory using the config defined in this package in watch mode.

#### # test:coverage
```
splash-scripts test:coverage
```

Runs all tests in code coverage mode.



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/water.png)](#developing)

## Developing

### Built With

- [Splash Scripts](https://github.com/bmpieretti/splash-scripts)
- [Jest](https://jestjs.io/)

### Prerequisites

In order to test this package locally for development purposes, it's best to clone this locally and either npm link this package or modify the package.json install path to point to your local instance in a package that can consume these modules.

### Setting up Dev

Once the package path has been updated or linked, add an npm script to run the related command:

```json
// package.json
{
  ...,
  "scripts": {
    "test": "splash-scripts test"
  },
  ...
}
```

With that, simply run `npm run test` and jest will run the related tests using a local version of the splash-scripts-jest-config pacakge.

### Deploying / Publishing

Changes are automatically published upon merging to the master branch via [semantic release](https://github.com/semantic-release/semantic-release)

### Commiting

Commits utilize [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) to force commit history to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/water.png)](#versioning)

## Versioning

Using [SemVer](http://semver.org/) for versioning. For the versions available, see the TODO: [link to tags on this repository](/tags).


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/water.png)](#licensing)

## Licensing

Licensed under [MIT](https://opensource.org/licenses/MIT).

