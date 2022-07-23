module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'no-console': 'error',
    'no-param-reassign': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-nested-ternary': 'error',
    'no-plusplus': 'error',
    'prefer-spread': 'warn',
    'no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'eol-last': ['error', 'always'],
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 0,
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react-hooks/rules-of-hooks': 'off',
  },
};
