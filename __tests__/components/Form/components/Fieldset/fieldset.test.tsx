import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Fieldset from '@Components/Form/components/Fieldset';
import { GlobalTheme } from '@Theme/GlobalTheme';

describe('<Fieldset />', () => {
  const componentToRender = (
    <ThemeProvider theme={GlobalTheme}>
      <Fieldset>
        <p>teste</p>
      </Fieldset>
    </ThemeProvider>
  );

  it('should render the component', () => {
    const component = render(componentToRender);
    expect(component).toBeDefined();
  });
});
