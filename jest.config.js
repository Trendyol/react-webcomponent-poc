module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/register.ts',
    '!src/webcomponent.tsx',
    '!src/polyfill.ts',
    '!src/store/**',
    '!src/services/index.ts'
  ],
  testRegex: '.*\\.test\\.tsx?$',
  setupFiles: ['raf-polyfill']
};
