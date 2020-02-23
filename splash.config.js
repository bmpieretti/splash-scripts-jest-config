const path = require('path');

const configPath = ' --config ' + path.resolve(__dirname) + '/jest.config.js'

module.exports = {
  commands: [
    {
      name: 'jest --config ./jest.config.js',
      version: '',
      description: 'Runs tests',
      command: 'jest' + configPath
    }, {
      name: 'jest:watch --config ./jest.config.js',
      description: 'Runs jest tests in watch mode',
      command: 'jest --watch' + configPath
    }, {
      name: 'jest:coverage',
      description: 'Runs jest code coverage',
      command: 'jest --coverage' + configPath
    }
  ]
};
