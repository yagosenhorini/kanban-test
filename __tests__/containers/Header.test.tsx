import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Header from '@Containers/Header';

import { GlobalTheme } from '@Theme/GlobalTheme';

describe('<Header />', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    modal: { isOpen: false },
  };
  const store = mockStore(initialState);

  const componentToRender = (
    <Provider store={store}>
      <ThemeProvider theme={GlobalTheme}>
        <Header />
      </ThemeProvider>
    </Provider>
  );

  it('should render the Header component', () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });
});
