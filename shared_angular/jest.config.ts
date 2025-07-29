export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.mjs$": "ts-jest",
    "^.+\\.html$": "<rootDir>/tests/mocks/rawTransform.js",
    "^.+\\.css$": "<rootDir>/tests/mocks/rawTransform.js",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "\\.(scss|sass|less)$": "<rootDir>/tests/mocks/css.js",
    "^@src/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$|tslib|@angular|rxjs)"],
};
