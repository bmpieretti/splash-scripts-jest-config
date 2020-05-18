## Usage

To run this module, import the module into a project using [splash-scripts](https://github.com/bmpieretti/splash-scripts), and extend it from the extends field inside a splash config file:

``` js
// splash.config.js
{
  extends: ['@splash-plus/jest-config'],
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

### Chance Instance
This module also exports a seeded [ChanceJS](https://chancejs.com/) instance you can leverage in your tests by simply requiring it from this module:
```js
import { chance } from '@splash-plus/jest-config';

chance.sentence();
```

This allows you to seed any randomness needed in tests to get consistent behavior in the event of a flaky test run. This module will log the current seed before jest runs any test, and in order to use a seed, provide it via an env to the script such as the below example:
```
export SEED=123456789
```

