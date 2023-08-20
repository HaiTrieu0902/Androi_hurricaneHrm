module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'plugin:prettier/recommended', // Thêm plugin này để tích hợp Prettier vào ESLint
    ],
    plugins: ['prettier'], // Đảm bảo bạn đã thêm plugin prettier vào danh sách plugins
    rules: {
        // Các cài đặt quy tắc khác...
    },
};
