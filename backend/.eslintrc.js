module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["prettier", "@typescript-eslint"],
    rules: {
        "prettier/prettier": "error",
    },
};