module.exports = (wallaby) => {
    return {
        env: {
            type: 'node',
        },

        compilers: {
            '**/*.{js,jsx,ts,tsx}': wallaby.compilers.babel({
                babel: require('@babel/core'),
                presets: ['@babel/typescript', '@babel/env', '@babel/react'],
                plugins: [
                    '@babel/plugin-transform-runtime',
                    '@babel/plugin-proposal-class-properties',
                ],
            }),
        },
    }
}
