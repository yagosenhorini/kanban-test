import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, act, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

import Modal from '@Containers/Modal';
import { GlobalTheme } from '@Theme/GlobalTheme';
import * as services from '@Services/index';
import * as actions from '@Store/ducks/modal/actions';
import * as cardActions from '@Store/ducks/kanban/actions';
import { TOKEN } from '@Mocks/tokenMock';

describe('<Modal />', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    modal: { isOpen: true },
  };
  const store = mockStore(initialState);

  const componentToRender = (
    <Provider store={store}>
      <ThemeProvider theme={GlobalTheme}>
        <Modal isVisible />;
      </ThemeProvider>
    </Provider>
  );

  it('should render the modal', () => {
    const component = render(componentToRender);
    expect(component).toBeDefined();
  });

  it('should close the modal', async () => {
    const actionsSpy = jest.spyOn(actions, 'toggleModal');
    const { findByTestId } = render(componentToRender);
    const $closeButton = await findByTestId('close-modal-button');

    await act(async () => {
      await userEvent.click($closeButton);
      waitFor(() => {
        actions.toggleModal();
      });
    });

    expect(actionsSpy).toBeCalled();
  });

  it('should submit the form', async () => {
    const actionsSpy = jest.spyOn(actions, 'toggleModal');
    const kanbanSpy = jest.spyOn(cardActions, 'createCard');
    const servicesSpy = jest.spyOn(services, 'setApiToken');
    const { findByTestId } = render(componentToRender);
    const $titleInput = await findByTestId('title-input');
    const $contentInput = await findByTestId('content-input');
    const $saveCard = await findByTestId('save-card-button');

    await act(async () => {
      await userEvent.type($titleInput, 'teste');
      await userEvent.type($contentInput, 'teste');
      await userEvent.click($saveCard);

      const body = {
        lista: 'ToDo',
        conteudo: 'teste',
        titulo: 'teste',
      };

      waitFor(() => {
        services.setApiToken(TOKEN);
        cardActions.createCard(body);
        actions.toggleModal();
      });
    });

    expect(servicesSpy).toBeCalled();
    expect(kanbanSpy).toBeCalled();
    expect(actionsSpy).toBeCalled();
  });
});
