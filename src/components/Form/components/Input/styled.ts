import styled from 'styled-components';

import { rem } from 'polished';

export const Input = styled.input`
  width: 100%;
  border: none;
  height: ${rem(60)};
  padding-left: ${rem(20)};
  border-radius: ${rem(40)};
  border: 1px solid ${({ theme }) => theme.colors.black};

  /** */
  &.has--error {
    border-color: ${({ theme }) => theme.colors.darkRed};
  }

  &.is--filled {
    border-color: green;
  }
`;
