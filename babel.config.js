/**
 * Babel configuration
 * https://babeljs.io/docs/usage/api/
 */
module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    ['inline-react-svg', {
      svgo: {
        plugins: [
          {
            removeAttrs: {
              attrs: '(data-name)',
            },
          },
          {
            cleanupIDs: true,
          },
        ],
      },
    }],
  ],
  env: {
    development: {
      plugins: [
        ['styled-components', {
          ssr: true,
          displayName: true,
          preprocess: false, // Debug styled only on dev mode
        }],
      ],
    },
    production: {
      plugins: [
        // https://github.com/jamiebuilds/babel-react-optimize
        // https://medium.com/doctolib/improve-react-performance-with-babel-16f1becfaa25
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        'transform-react-remove-prop-types',
        'babel-plugin-jsx-remove-data-test-id',
        ['styled-components', {
          displayName: false,
        }],
      ],
    },
  },
};
