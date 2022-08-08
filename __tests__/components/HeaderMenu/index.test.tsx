import React from 'react';
import thunk from 'redux-thunk';
import * as Redux from 'react-redux';
import configureStore from 'redux-mock-store';
import Router from 'next/router';
import { render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

import HeaderMenu from '@Components/HeaderMenu';
import * as services from '@Services/index';
import * as actions from '@Store/ducks/modal/actions';
import { GlobalTheme } from '@Theme/GlobalTheme';
import { act } from 'react-test-renderer';

jest.mock('next/router');

describe('<HeaderMenu />', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    modal: { isOpen: false },
  };
  const store = mockStore(initialState);

  const componentToRender = (
    <Redux.Provider store={store}>
      <ThemeProvider theme={GlobalTheme}>
        <HeaderMenu />
      </ThemeProvider>
    </Redux.Provider>
  );

  it('should render the component', () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });

  it('should click on the logout button', async () => {
    const spyApiServices = jest.spyOn(services, 'setApiToken');
    const spyRouter = jest.spyOn(Router, 'push');

    const { findByTestId } = render(componentToRender);
    const $logoutButton = await findByTestId('logout-button');

    await act(async () => {
      await userEvent.click($logoutButton);
      waitFor(() => {
        services.setApiToken('');
        Router.push('/');
      });
    });

    expect(spyApiServices).toBeCalled();
    expect(spyRouter).toBeCalled();
  });

  it('should click on new card button', async () => {
    const actionsSpy = jest.spyOn(actions, 'toggleModal');
    const { findByTestId } = render(componentToRender);
    const $newButton = await findByTestId('new-card-button');

    await act(async () => {
      await userEvent.click($newButton);
      waitFor(() => {
        actions.toggleModal();
      });
    });

    expect(actionsSpy).toBeCalled();
  });
});
