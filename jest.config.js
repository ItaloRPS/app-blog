module.exports = {
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!<rootDir>/src/*.{js,jsx,ts,tsx}',
      '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
      '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
      '!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
      '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
      '!<rootDir>/**/stories/*{js,jsx,ts,tsx,css}',
      '!<rootDir>/**/app/*{js,jsx,ts,tsx,css}',
      '!<rootDir>/node_modules/',
    ],
  
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.out/', '/public/'],
    transform: {
      '\\.[jt]sx?$': 'esbuild-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  };
  