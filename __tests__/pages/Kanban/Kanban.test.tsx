import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import KanbanPage from '@Pages/Kanban';

import { GlobalTheme } from '@Theme/GlobalTheme';
import { mockBoardCards } from '@Mocks/boardCardsMock';

jest.useFakeTimers();

describe('<KanbanPage />', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    modal: { isOpen: false },
    kanban: { cards: mockBoardCards },
  };
  const store = mockStore(initialState);

  const componentToRender = (
    <Provider store={store}>
      <ThemeProvider theme={GlobalTheme}>
        <KanbanPage />
      </ThemeProvider>
    </Provider>
  );

  it('should render the kanban page', async () => {
    const component = render(componentToRender);
    expect(component).toBeDefined();
  });
});
