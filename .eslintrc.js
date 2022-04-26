const path = require('path')

/**
 * ESLint configuration
 * http://eslint.org/docs/user-guide/configuring
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:ramda/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'next',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y', 'ramda', 'import', 'promise'],
  rules: {
    'linebreak-style': 'off', // Avoid LF/CRLF on Win/Linux/Mac
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off', // For single Styled Component exports
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/function-component-definition': 'off',
    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: [path.resolve(__dirname, 'src')],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
}
