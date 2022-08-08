import { rem } from 'polished';
import styled from 'styled-components';

export const KanbanWrapper = styled.section`
  gap: 50px;
  width: 90%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
`;

export const ToDoColumn = styled.div<{ isLast?: boolean }>`
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  padding: ${rem(24)};
  height: calc(100vh - ${rem(70)});
  border-left: 1px solid ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.white};
`;

export const ToDoColumnName = styled.h2`
  width: 100%;
  text-align: center;
  font-size: ${rem(30)};
  margin-bottom: ${rem(20)};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontPrimary};
`;
