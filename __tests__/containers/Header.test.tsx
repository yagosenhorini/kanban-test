import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Header from '@Containers/Header';

import { GlobalTheme } from '@Theme/GlobalTheme';

describe('Header component', () => {
  it('should render the Header component', () => {
    const component = render(
      <ThemeProvider theme={GlobalTheme}>
        <Header />
      </ThemeProvider>
    );
    expect(component).toBeTruthy();
  });
});
