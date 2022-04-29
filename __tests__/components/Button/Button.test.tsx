import { render } from '@testing-library/react';

import Button from '@Components/Button';

describe('Button component', () => {
  it('Should render the Button', () => {
    const component = render(<Button />);
    expect(component).toBeTruthy();
  });
});
