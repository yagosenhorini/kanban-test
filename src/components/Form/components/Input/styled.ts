import styled from 'styled-components';

import { rem } from 'polished';

export const Input = styled.input`
  width: 100%;
  border: none;
  height: ${rem(60)};
  border-radius: ${rem(10)};
  border-color: ${({ theme }) => theme.colors.black};
`;
