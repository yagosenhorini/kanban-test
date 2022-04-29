import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Form from '@Components/Form';

const mockedSubmit = jest.fn();
const componentToRender = (
  <Form onSubmit={mockedSubmit}>
    <input type="text" data-testid="input-component" />
    <button type="submit">Enviar</button>
  </Form>
);

describe('<Form />', () => {
  it('should render the form', async () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });

  it('should submit the form', async () => {
    const { findByTestId } = render(componentToRender);
    const $form = await findByTestId('form-component');
    const $input = await findByTestId('input-component');

    fireEvent.change($input, { target: { value: 'item' } });
    fireEvent.submit($form);

    expect(mockedSubmit).toBeCalled();
  });
});
