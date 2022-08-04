import React from 'react';
import { render } from '@testing-library/react';

import Card from '@Components/Card';

describe('<Card />', () => {
  const componentToRender = <Card />;
  it('should render the component', async () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });
});
