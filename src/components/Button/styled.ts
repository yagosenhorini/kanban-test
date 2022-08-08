import { rem } from 'polished';
import styled from 'styled-components';

export const Button = styled.button<{ isPrimary?: boolean }>`
  border: none;
  font-weight: bold;
  width: ${rem(140)};
  height: ${rem(45)};
  border-radius: ${rem(20)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.colors.main : theme.colors.red};
`;
