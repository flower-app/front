module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
