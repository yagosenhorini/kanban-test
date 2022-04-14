import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: ${({ theme }) => theme.margin};
    padding: ${({ theme }) => theme.padding};
    box-sizing: ${({ theme }) => theme.boxSizing};
    outline: ${({ theme }) => theme.outline};
    font-family: ${({ theme }) => theme.fontPrimary};
  }

  body {
    background-color: ${({ theme }) => theme.colors.main};
  }
`;
