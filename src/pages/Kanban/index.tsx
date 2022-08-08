import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@Components/Card';
import Modal from '@Containers/Modal';

import { boardCards } from '@Resources/card-resources';

import { getCards } from '@Store/ducks/kanban';

import * as S from './styled';

const cardSelector = (state) => state.kanban;
const modalSelector = (state) => state.modal;

const KanbanPage = () => {
  const dispatch = useDispatch();
  const { cards, isLoading } = useSelector(cardSelector);
  const { isOpen } = useSelector(modalSelector);

  useEffect(() => {
    (async () => {
      dispatch(getCards());
    })();
  }, [dispatch, isLoading]);

  setTimeout(() => {
    if (isLoading || !cards.length) {
      return <p>Carregando...</p>;
    }
    return true;
  }, 300);

  const toDo = boardCards(cards, 'ToDo');
  const doing = boardCards(cards, 'Doing');
  const done = boardCards(cards, 'Done');

  return (
    <>
      <S.KanbanWrapper>
        <S.ToDoColumn>
          <S.ToDoColumnName>A Fazer</S.ToDoColumnName>
          {toDo?.map((element) => (
            <Card
              key={element.lista}
              id={element.id}
              titulo={element.titulo}
              conteudo={element.conteudo}
              lista={element.lista}
            />
          ))}
        </S.ToDoColumn>
        <S.ToDoColumn>
          <S.ToDoColumnName>Fazendo</S.ToDoColumnName>
          {doing?.map((element) => (
            <Card
              key={element.lista}
              id={element.id}
              titulo={element.titulo}
              conteudo={element.conteudo}
              lista={element.lista}
            />
          ))}
        </S.ToDoColumn>
        <S.ToDoColumn>
          <S.ToDoColumnName>Feito</S.ToDoColumnName>
          {done?.map((element) => (
            <Card
              key={element.lista}
              id={element.id}
              titulo={element.titulo}
              conteudo={element.conteudo}
              lista={element.lista}
            />
          ))}
        </S.ToDoColumn>
      </S.KanbanWrapper>
      {isOpen && <Modal isVisible={isOpen} />}
    </>
  );
};

export default KanbanPage;
