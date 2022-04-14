import { DefaultTheme } from 'styled-components';

import { rem, rgb } from 'polished';

const GlobalTheme: DefaultTheme = {
  margin: `${rem(0)}`,
  padding: `${rem(0)}`,
  boxSizing: 'border-box',
  outline: 'none',

  colors: {
    main: '#256DB1',
  },

  fontPrimary: 'Arial',
  fontSecondary: 'Roboto',
};

export { GlobalTheme };
