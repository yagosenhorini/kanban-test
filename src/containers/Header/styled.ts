import styled from 'styled-components';

import { rem } from 'polished';

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: ${rem(70)};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
