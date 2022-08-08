/* import de método do Redux */

import { Action } from 'redux';

export type IKanbanData = {
  lista: string;
  conteudo: string;
  titulo: string;
};

export interface setIKanbanAction extends Action {
  payload?: IKanbanData;
}

/* export de estado inicial para utilização no reducer */
export interface initialStateInterface {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  cards: IKanbanData[];
}
/* export de typo com todas as ações estendidas */
export type KanbanActionTypes = setIKanbanAction;
