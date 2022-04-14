module.exports = {
  '*.{js,jsx,ts,tsx}': ['yarn lint:js', 'yarn lint:css'],
  '*.{pug,jade}': ['yarn lint:pug']
};