const path = require('path')

module.exports = {
  rootDir: process.cwd(),
  watchPathIgnorePatterns: [
    '<rootDir>/lib/'
  ],
  globalSetup: path.join(__dirname, '/src/jestSetup.js'),
  testPathIgnorePatterns: ['<rootDir>/lib/'],
  coveragePathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/(?:.+?)/configs/'],
  coverageReporters: ['html', 'text'],
  errorOnDeprecated: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
