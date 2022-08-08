import { CardProps } from '@/components/Card/types';

export const boardList = [
  {
    id: 1,
    value: 'ToDo',
    text: 'A fazer',
  },
  {
    id: 2,
    value: 'Doing',
    text: 'Fazendo',
  },
  {
    id: 3,
    value: 'Done',
    text: 'Feito',
  },
];

export const boardCards = (cards: CardProps[], list: string) =>
  cards.filter(({ lista }) => lista === list);
