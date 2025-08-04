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

    "^shared_utils/SharedUtils$": "<rootDir>/tests/mocks/SharedUtils.js",
    "^shared_utils/SharedUtilsEnums$":
      "<rootDir>/tests/mocks/SharedUtilsEnums.js",
    "^shared_utils/SharedUtilsProps$":
      "<rootDir>/tests/mocks/SharedUtilsProps.js",

    "^shared_react/SharedReact$":
      "<rootDir>/tests/mocks/SharedReact.js",
    "^shared_react/SharedReactEnums$":
      "<rootDir>/tests/mocks/SharedReactEnums.js",
    "^shared_react/SharedReactProps$":
      "<rootDir>/tests/mocks/SharedReactProps.js",
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$|tslib|@angular|rxjs)"],
};
