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

    "^shared_core/SharedCore$": "<rootDir>/tests/mocks/SharedCore.js",
    "^shared_core/SharedCoreEntities$": "<rootDir>/tests/mocks/SharedCoreEntities.js",
    "^shared_core/SharedCoreEnums$": "<rootDir>/tests/mocks/SharedCoreEnums.js",
    "^shared_core/SharedCoreProps$": "<rootDir>/tests/mocks/SharedCoreProps.js",
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$|tslib|@angular|rxjs)"],
};
