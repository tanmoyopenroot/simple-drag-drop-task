import { Action } from 'redux';
import { IPanelModal } from '../modals/panel';
import {
  ADD_PANEL,
  DELETE_PANEL,
} from './types';

export type PanelsStateType = Readonly<{
  panelsID: string[],
  panelsHash: { [key: string]: IPanelModal; },
}>;

export interface IPanelAddAction extends Action {
  type: typeof ADD_PANEL;
  payload: Omit<IPanelModal, 'id'>;
}

export interface IPanelDeleteAction extends Action {
  type: typeof DELETE_PANEL;
  payload: {
    id: string;
  };
}

export const addPanel = (payload: Omit<IPanelModal, 'id'>): IPanelAddAction => ({
  payload,
  type: ADD_PANEL,
});

export const deletePanel = (id: string): IPanelDeleteAction => ({
  type: DELETE_PANEL,
  payload: {
    id,
  },
});
