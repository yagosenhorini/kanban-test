import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import KanbanPage from '@Pages/Kanban';

import { GlobalTheme } from '@Theme/GlobalTheme';

describe('<KanbanPage />', () => {
  const componentToRender = (
    <ThemeProvider theme={GlobalTheme}>
      <KanbanPage />
    </ThemeProvider>
  );

  it('should render the kanban page', async () => {
    const component = render(componentToRender);
    expect(component).toBeDefined();
  });
});
