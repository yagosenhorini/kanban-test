import styled from 'styled-components';

import { rem, rgba } from 'polished';

export const ModalOverlay = styled.div`
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  position: fixed;
  transition: 0.45s;
  transform: translateY(-200%);
  background-color: ${rgba(0, 0, 0, 0.5)};

  /** */
  &.is--visible {
    transform: translateY(0);
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  width: ${rem(500)};
  height: ${rem(500)};
  flex-direction: column;
  margin: ${rem(100)} auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ModalHeader = styled.header`
  width: 100%;
  display: flex;
  height: ${rem(100)};
  justify-content: flex-end;
`;

export const ModalButton = styled.button`
  width: ${rem(40)};
  height: ${rem(40)};
  border: none;
`;
