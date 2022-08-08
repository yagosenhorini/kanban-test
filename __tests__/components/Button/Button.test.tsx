import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Button from '@Components/Button';
import { GlobalTheme } from '@Theme/GlobalTheme';

describe('Button component', () => {
  const componentToRender = (
    <ThemeProvider theme={GlobalTheme}>
      <Button />
    </ThemeProvider>
  );
  it('Should render the Button', () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });
});
