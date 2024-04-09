// wallaby.mjs
export default function (wallaby) {
    return {
        env: {
            type: 'node',
            runner: 'node'  // Use the system's node version
        },

        files: [
            'src/**/*.ts',  // Include TypeScript files
            '!src/**/*.test.ts'  // Exclude test files
        ],

        tests: [
            'src/**/*.test.ts'  // Include test TypeScript files
        ],

        compilers: {
            '**/*.ts?(x)': wallaby.compilers.typeScript({  // Ensure TypeScript files are compiled
                // TypeScript compiler options here
                module: 'commonjs'
            })
        },

        testFramework: 'jest',

        setup: function (wallaby) {
            const jestConfig = require('./jest.config.js');  // Synchronously load the Jest config
            wallaby.testFramework.configure(jestConfig);
        },

        debug: true
    };
}
