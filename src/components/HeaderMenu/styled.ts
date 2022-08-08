import styled from 'styled-components';

import { rem } from 'polished';

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LogoWrapper = styled.div`
  width: ${rem(30)};
  height: ${rem(30)};
  margin-left: ${rem(20)};
`;

export const HeaderMenuWrapper = styled.ul`
  display: flex;
  list-style: none;
  width: ${rem(360)};
  align-items: center;
  justify-content: space-around;
`;

export const HeaderMenuItem = styled.li`
  display: flex;
  cursor: pointer;
  width: ${rem(100)};
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black};
`;
