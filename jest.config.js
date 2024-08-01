/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = { // eslint-disable-line no-undef
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.test.ts'
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  }
};