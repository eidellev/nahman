module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jsx-a11y', 'jest'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error',
  },
};
