import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    margin: string,
    padding: string,
    boxSizing: string,
    outline: string,

    colors: {
      main: string,
      white: string,
      black: string,
    }

    fontPrimary: string,
    fontSecondary: string,
  }
};