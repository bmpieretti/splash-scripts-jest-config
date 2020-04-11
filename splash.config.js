const path = require('path');

const jestVersion = 'jest@^25.3.0'
const configPath = ' --config ' + path.resolve(__dirname) + '/jest.config.js'

module.exports = {
  commands: [
    {
      name: 'test',
      description: 'Runs tests',
      command: jestVersion + configPath
    }, {
      name: 'test:watch',
      description: 'Runs jest tests in watch mode',
      command: jestVersion + ' --watch' + configPath
    }, {
      name: 'test:coverage',
      description: 'Runs jest code coverage',
      command: jestVersion + ' --coverage' + configPath
    }
  ]
};
