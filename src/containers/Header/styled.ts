import styled from "styled-components";

import { rem } from "polished";

export const Header = styled.header`
  width: 100%;
  height: ${rem(70)};
  background-color: ${({ theme }) => theme.colors.white};
`;
