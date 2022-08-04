import React from 'react';

import * as S from './styled';

const KanbanPage = () => (
  <S.KanbanWrapper>
    <S.ToDoColumn>
      <S.ToDoColumnName>To do</S.ToDoColumnName>
    </S.ToDoColumn>
    <S.ToDoColumn>
      <S.ToDoColumnName>Doing</S.ToDoColumnName>
    </S.ToDoColumn>
    <S.ToDoColumn>
      <S.ToDoColumnName>Done</S.ToDoColumnName>
    </S.ToDoColumn>
  </S.KanbanWrapper>
);

export default KanbanPage;
