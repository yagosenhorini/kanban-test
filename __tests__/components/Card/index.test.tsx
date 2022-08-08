import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

import Card from '@Components/Card';
import { boardList } from '@Resources/card-resources';
import { GlobalTheme } from '@Theme/GlobalTheme';

import { mockBoardCards } from '../../../__mocks__/boardCardsMock';

describe('<Card />', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore();

  const componentToRender = (
    <Provider store={store}>
      <ThemeProvider theme={GlobalTheme}>
        <Card
          id={mockBoardCards[0].id}
          titulo={mockBoardCards[0].titulo}
          conteudo={mockBoardCards[0].conteudo}
          lista={mockBoardCards[0].lista}
        />
        ;
      </ThemeProvider>
    </Provider>
  );
  it('should render the component', async () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });

  it('should enable the form', async () => {
    // eslint-disable-next-line prefer-const
    let isBlocked = true;
    const cardTitle = 'teste';
    const cardContent = 'teste';
    const cardList = boardList;

    React.useState = jest
      .fn()
      .mockReturnValue([isBlocked, () => jest.fn()])
      .mockReturnValueOnce([cardTitle, () => {}])
      .mockReturnValueOnce([cardContent, () => {}])
      .mockReturnValueOnce([cardList, () => {}]);

    const { findByTestId } = render(componentToRender);
    const $editButton = await findByTestId('edit-button');

    await userEvent.click($editButton);

    waitFor(async () => {
      expect(await findByTestId('cancel-button'));
      userEvent.click(await findByTestId('cancel-button'));
      expect(await findByTestId('select-component')).toBeDefined();
    });

    waitFor(() => {
      expect(isBlocked).toBe(true);
    });
  });
});
