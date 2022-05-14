module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  globals: {
    "__DEV__": true
  },
  clearMocks: true,
  moduleNameMapper: {
    "^~(.*)$": '<rootDir>/src/$1'
  }
}