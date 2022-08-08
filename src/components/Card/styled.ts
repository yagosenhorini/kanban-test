import styled from 'styled-components';
import { rem } from 'polished';

import Button from '../Button';

export const CardWrapper = styled.div`
  width: 90%;
  height: ${rem(300)};
  padding: ${rem(10)};
  border-radius: ${rem(5)};
  margin: 0 auto ${rem(40)};
  transition: 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 13px -7px ${({ theme }) => theme.colors.black};

  /** */
  &:hover {
    transform: scale(1.04);
  }
`;

export const CardTitle = styled.input`
  width: 100%;
  border: none;
  font-size: ${rem(14)};
  font-family: ${({ theme }) => theme.fontPrimary};
`;

export const CardContent = styled.textarea`
  width: 100%;
  resize: none;
  padding: ${rem(10)};
  height: ${rem(120)};
  margin-top: ${rem(24)};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const CardButton = styled(Button)<{ isPrimary?: boolean }>`
  display: flex;

  cursor: pointer;
  font-weight: 600;
  width: ${rem(80)};
  height: ${rem(30)};
  align-items: center;
  margin-left: ${rem(30)};
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontPrimary};
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.main : theme.colors.red};
`;

export const CardButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem(20)};
  justify-content: flex-end;
`;
