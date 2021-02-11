module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["./setupTests.ts"],

    roots: ["<rootDir>/src"],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
};