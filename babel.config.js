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
    ['styled-components', {
      ssr: true,
      displayName: true,
      preprocess: false,
    }],
    // ['babel-plugin-jsx-remove-data-test-id'],
  ],
  // env: {
  //   development: {
  //     plugins: [
  //       ['styled-components', {
  //         displayName: true, // Debug styled only on dev mode
  //       }],
  //     ],
  //   },
  //   production: {
  //     plugins: [
  //       // https://github.com/jamiebuilds/babel-react-optimize
  //       // https://medium.com/doctolib/improve-react-performance-with-babel-16f1becfaa25
  //       '@babel/plugin-transform-react-constant-elements',
  //       '@babel/plugin-transform-react-inline-elements',
  //       'transform-react-remove-prop-types',
  //       ['styled-components', {
  //         displayName: false,
  //       }],
  //     ],
  //   },
  // },
};
