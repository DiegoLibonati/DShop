module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "<rootDir>/tests/mocks/css.js",
    "^.+\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/tests/mocks/imgs.js",
    "^@src/(.*)$": "<rootDir>/src/$1",

    "^shared_core/SharedCore$": "<rootDir>/tests/mocks/SharedCore.js",
    "^shared_core/SharedCoreEnums$": "<rootDir>/tests/mocks/SharedCoreEnums.js",
    "^shared_core/SharedCoreProps$": "<rootDir>/tests/mocks/SharedCoreProps.js",
  },
  transformIgnorePatterns: [],
};
