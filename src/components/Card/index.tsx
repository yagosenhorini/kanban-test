import React from 'react';
import { useDispatch } from 'react-redux';

import EditIcon from '@Icons/edit.svg';

import { deleteCard, updateCard } from '@Store/ducks/kanban';
import { boardList } from '@Resources/card-resources';

import * as S from './styled';

import { CardProps } from './types';
import Select from '../Select';

const Card = ({ id, titulo, conteudo }: CardProps) => {
  const dispatch = useDispatch();

  const [isBlocked, setIsBlocked] = React.useState(true);
  const [cardTitle, setCardTitle] = React.useState('');
  const [cardContent, setCardContent] = React.useState('');
  const [cardList, setCardList] = React.useState('');

  const toggleEditableCard = () => {
    setIsBlocked(!isBlocked);
  };

  const removeCard = async () => {
    try {
      await dispatch(deleteCard(id));
    } finally {
      setIsBlocked(!isBlocked);
    }
  };

  const sendCardData = async () => {
    const body = {
      lista: cardList,
      conteudo: cardContent,
      titulo: cardTitle,
      id,
    };

    try {
      await dispatch(updateCard(id, body));
    } finally {
      setIsBlocked(!isBlocked);
    }
  };

  return (
    <S.CardWrapper>
      <S.CardTitle
        data-testid="card-title"
        disabled={isBlocked}
        defaultValue={titulo}
        onChange={(ev) => setCardTitle(ev.currentTarget.value)}
      />
      <S.CardContent
        data-testid="card-content"
        defaultValue={conteudo}
        disabled={isBlocked}
        onChange={(ev) => setCardContent(ev.currentTarget.value)}
      />
      {!isBlocked && (
        <Select
          list={boardList}
          onChange={(ev) => setCardList(ev.currentTarget.value)}
        />
      )}
      <S.CardButtonWrapper>
        {isBlocked ? (
          <>
            <S.CardButton
              data-testid="edit-button"
              isPrimary
              onClick={toggleEditableCard}
            >
              <EditIcon width={16} height={16} />
              Editar
            </S.CardButton>
            <S.CardButton data-testid="remove-button" onClick={removeCard}>
              {/* <DeleteIcon width={16} height={16} /> */}
              Excluir
            </S.CardButton>
          </>
        ) : (
          <>
            <S.CardButton
              data-testid="save-button"
              isPrimary
              onClick={sendCardData}
            >
              Salvar
            </S.CardButton>
            <S.CardButton
              data-testid="cancel-button"
              onClick={toggleEditableCard}
            >
              Cancelar
            </S.CardButton>
          </>
        )}
      </S.CardButtonWrapper>
    </S.CardWrapper>
  );
};

export default Card;
