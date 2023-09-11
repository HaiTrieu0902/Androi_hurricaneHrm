module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: '.env',
                blacklist: null,
                whitelist: null,
                safe: false,
                allowUndefined: true,
            },
        ],
        // [
        //     'module-resolver',
        //     {
        //         root: ['./src/'],
        //         extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg', '.ios.js', '.android.js'],
        //         alias: {
        //             components: './src/components',
        //             screens: './src/screens',
        //             types: './src/types',
        //             hook: './src/hook',
        //             constants: './src/constants',
        //             navigation: './src/navigation',
        //             services: './src/services',
        //             utils: './src/utils',
        //             configs: './src/configs',
        //             redux: './src/redux',
        //             assets: './src/assets',
        //         },
        //     },
        // ],
    ],
};
