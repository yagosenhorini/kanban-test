import { rem } from 'polished';
import styled from 'styled-components';

export const Select = styled.select`
  border: none;
  appearance: none;
  font-weight: bold;
  width: ${rem(100)};
  text-align: center;
  height: ${rem(40)};
  margin-top: ${rem(20)};
  border-radius: ${rem(10)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Option = styled.option``;
