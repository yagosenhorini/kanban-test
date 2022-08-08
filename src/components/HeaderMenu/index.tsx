import React from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

import LogoutIcon from '@Icons/logout.svg';

import { setApiToken } from '@Services/index';
import { toggleModal } from '@Store/ducks/modal';

import * as S from './styled';

import Button from '../Button';

const HeaderMenu = () => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    setApiToken('');
    Router.push('/');
  };

  const openModal = () => {
    dispatch(toggleModal());
  };

  return (
    <S.Menu>
      <S.HeaderMenuWrapper>
        <Button
          data-testid="new-card-button"
          isPrimary
          type="button"
          onClick={openModal}
        >
          Novo
        </Button>
        <S.HeaderMenuItem data-testid="logout-button" onClick={logoutUser}>
          Logout
          <LogoutIcon width={24} height={24} />
        </S.HeaderMenuItem>
      </S.HeaderMenuWrapper>
    </S.Menu>
  );
};

export default HeaderMenu;
