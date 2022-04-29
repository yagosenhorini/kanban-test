import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// import fireEvent from '@testing-library/user-event';

import Form from '@Components/Form';

describe('<Form>', () => {
  const mockedFormSubmit = jest.fn();
  const component = (
    <Form onSubmit={mockedFormSubmit} testId="form-component">
      <input type="text" data-testid="input-component" />
      <button
        onClick={() => mockedFormSubmit()}
        type="submit"
        data-testid="button-component"
      >
        Enviar
      </button>
    </Form>
  );

  it('should render the form component', async () => {
    const renderedComponent = render(component);
    expect(renderedComponent).toBeTruthy();
  });

  it('should submit values of the form', async () => {
    const { findByTestId } = render(component);
    const $input = await findByTestId('input-component');
    const $form = await findByTestId('form-component');

    fireEvent.change($input, { target: { value: 'item' } });

    fireEvent.submit($form);

    expect(mockedFormSubmit).toBeCalled();
  });
});
