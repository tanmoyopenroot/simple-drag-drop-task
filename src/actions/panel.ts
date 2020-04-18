import { Action } from 'redux';
import { IPanelModal } from '../modals/panel';
import { ADD_PANEL } from './types';

export type PanelsStateType = Readonly<{
  panelsID: string[],
  panelsHash: { [key: string]: IPanelModal; },
}>;

export interface IPanelAddAction extends Action {
  type: typeof ADD_PANEL;
  payload: Omit<IPanelModal, 'id'>;
}

export const addPanel = (payload: Omit<IPanelModal, 'id'>): IPanelAddAction => ({
  payload,
  type: ADD_PANEL,
});
