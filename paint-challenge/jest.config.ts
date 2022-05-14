const jestConfig = {
  clearMocks: true,
  coverageProvider: "v8",
  
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', '.'],
} 

export default jestConfig