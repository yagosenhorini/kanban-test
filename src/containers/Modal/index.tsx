import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { FieldErrors, useForm } from 'react-hook-form';

import Form from '@Components/Form';
import Button from '@Components/Button';
import Input from '@Components/Form/components/Input';
import Fieldset from '@Components/Form/components/Fieldset';

import { createCard } from '@Store/ducks/kanban';
import { toggleModal } from '@Store/ducks/modal';

import * as S from './styled';

import { ModalForm, ModalProps } from './types';

const Modal = ({ isVisible }: ModalProps) => {
  const dispatch = useDispatch();

  const modalToggle = () => {
    dispatch(toggleModal());
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModalForm, FieldErrors>();

  const onSubmit = handleSubmit(async (data: ModalForm) => {
    try {
      await dispatch(createCard(data));
    } finally {
      modalToggle();
    }
  });

  return (
    <S.ModalOverlay className={cx({ 'is--visible': isVisible })}>
      <S.ModalWrapper>
        <S.ModalHeader>
          <S.ModalButton data-testid="close-modal-button" onClick={modalToggle}>
            X
          </S.ModalButton>
        </S.ModalHeader>
        <Form onSubmit={onSubmit}>
          <Fieldset>
            <Input
              {...register('titulo', {
                required: 'Campo obrigatório',
              })}
              type="text"
              testId="title-input"
              name="titulo"
              id="titulo"
              error={errors.titulo?.type}
              placeholder="Título"
            />
          </Fieldset>
          <Fieldset>
            <Input
              {...register('conteudo', {
                required: 'Campo obrigatório',
              })}
              type="text"
              testId="content-input"
              name="conteudo"
              id="conteudo"
              error={errors.conteudo?.type}
              placeholder="Conteúdo"
            />
          </Fieldset>

          <Button type="submit" data-testid="save-card-button" isPrimary>
            Salvar
          </Button>
        </Form>
      </S.ModalWrapper>
    </S.ModalOverlay>
  );
};

export default Modal;
