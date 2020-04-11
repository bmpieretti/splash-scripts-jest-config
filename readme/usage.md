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

#### test
```
splash-scripts test
```

Runs all tests withing the current directory using the config defined in this package.

**Note** All commands support additional passed in arguments via simply appending them to the splash-scripts call: `splash-scripts [command] [...options]`

#### test:watch
```
splash-scripts test:watch
```

Runs all tests withing the current directory using the config defined in this package in watch mode.

#### test:coverage
```
splash-scripts test:coverage
```

Runs all tests in code coverage mode.
