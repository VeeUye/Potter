// jest.config.js
export default {
    preset: 'ts-jest/presets/default-esm',  // Use the ESM preset for ts-jest
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',  // Redirect .js imports to their .ts source files
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
};