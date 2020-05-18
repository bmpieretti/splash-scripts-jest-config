const path = require('path');

const jestVersion = 'jest'
const configPath = ' --config ' + path.resolve(__dirname) + '/jest.config.js'

module.exports = {
  commands: [
    {
      name: 'test',
      description: 'Runs tests with ' + jestVersion,
      command: jestVersion + configPath
    }, {
      name: 'test:watch',
      description: 'Runs jest tests in watch mode with ' + jestVersion,
      command: jestVersion + ' --watch' + configPath
    }, {
      name: 'test:coverage',
      description: 'Runs jest code coverage mode with ' + jestVersion,
      command: jestVersion + ' --coverage' + configPath
    }
  ]
};
