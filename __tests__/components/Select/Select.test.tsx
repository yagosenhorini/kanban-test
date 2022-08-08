import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Select from '@Components/Select';
import { GlobalTheme } from '@Theme/GlobalTheme';
import { boardList } from '@Resources/card-resources';

const mockedOnChange = jest.fn();

describe('<Select />', () => {
  const componentToRender = (
    <ThemeProvider theme={GlobalTheme}>
      <Select onChange={mockedOnChange} list={boardList} />
    </ThemeProvider>
  );
  it('should render the component', () => {
    const component = render(componentToRender);
    expect(component).toBeDefined();
  });
});
