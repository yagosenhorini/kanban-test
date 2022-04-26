import { DefaultTheme } from 'styled-components'

import { rem } from 'polished'

const GlobalTheme: DefaultTheme = {
  outline: 'none',
  margin: `${rem(0)}`,
  padding: `${rem(0)}`,
  boxSizing: 'border-box',

  colors: {
    main: '#256DB1',
    white: '#fff',
    black: '#000',
  },

  fontPrimary: 'Arial',
  fontSecondary: 'Roboto',
}

export { GlobalTheme }
