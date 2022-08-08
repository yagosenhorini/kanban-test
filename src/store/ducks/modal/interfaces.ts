/* import de método do Redux */

import { Action } from 'redux';

export type IModal = {
  isOpen: boolean;
};

export interface setIModalAction extends Action {
  payload?: IModal;
}

/* export de typo com todas as ações estendidas */
export type ModalActionTypes = setIModalAction;
