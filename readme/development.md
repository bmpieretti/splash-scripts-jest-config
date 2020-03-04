## Developing

### Built With

- [Splash Scripts](https://github.com/bmpieretti/splash-scripts)
- [Jest](https://jestjs.io/)

### Prerequisites

To get started, simply clone the repo and install node deps
```shell
npm install
```

### Building

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

Once files are staged, simply run `git commit` and husky will automatically run verify before running conventional commits to assist in formatting semantic commits.
