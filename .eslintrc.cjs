module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-unresolved': 'off',
    'linebreak-style': 'off',
    'object-curly-spacing': ['error', 'never'],
    '@typescript-eslint/no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'eol-last': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'off',
    'import/extensions': ['warn', 'never'],
    'import/order': 'off',
    'no-plusplus': 'off'
  },
}