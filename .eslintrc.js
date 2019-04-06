module.exports = {
  env: {
    browser: 1,
  },
  extends: 'seegno',
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-confusing-arrow': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
