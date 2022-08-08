import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, waitFor, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

import Card from '@Components/Card';
import { boardList } from '@Resources/card-resources';
import * as actions from '@Store/ducks/kanban/actions';
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

  it('should remove the card', async () => {
    const deleteSpy = jest.spyOn(actions, 'deleteCard');
    // eslint-disable-next-line prefer-const
    let isBlocked = true;
    const cardTitle = 'teste';
    const cardContent = 'teste';
    const cardList = boardList;

    React.useState = jest
      .fn()
      .mockReturnValue([isBlocked, () => {}])
      .mockReturnValueOnce([cardTitle, () => {}])
      .mockReturnValueOnce([cardContent, () => {}])
      .mockReturnValueOnce([cardList, () => {}]);

    const { findAllByTestId } = render(componentToRender);
    const $removeButton = await findAllByTestId('remove-button');

    await act(async () => {
      await userEvent.click($removeButton[0]);
    });

    expect(deleteSpy).toBeCalled();
  });
  it('should update the card', async () => {
    const updateSpy = jest.spyOn(actions, 'updateCard');
    // eslint-disable-next-line prefer-const
    const isBlocked = false;
    const cardTitle = 'teste';
    const cardContent = 'teste';
    const cardList = boardList;

    React.useState = jest
      .fn()
      .mockReturnValueOnce([isBlocked, () => {}])
      .mockReturnValueOnce([cardTitle, () => {}])
      .mockReturnValueOnce([cardContent, () => {}])
      .mockReturnValueOnce([cardList, () => {}]);

    const { findAllByTestId } = render(componentToRender);
    const $cardTitle = await findAllByTestId('card-title');
    const $cardContent = await findAllByTestId('card-content');
    const $updateButton = await findAllByTestId('save-button');

    await act(async () => {
      const $cardList = await findAllByTestId('select-component');
      await userEvent.type($cardTitle[0], 'teste');
      await userEvent.type($cardContent[0], 'teste');
      await userEvent.selectOptions($cardList[0], 'Doing');
      await userEvent.click($updateButton[0]);
    });

    expect(updateSpy).toBeCalled();
  });
});
