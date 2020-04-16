import { Action } from 'redux';
import {
  ADD_PANEL,
  DELETE_PANEL,
} from './types';

export interface IPanelAddAction extends Action {
  type: typeof ADD_PANEL;
  payload: {
    title: string;
  };
}

export interface IPanelDeleteAction extends Action {
  type: typeof DELETE_PANEL;
  payload: {
    id: string;
  };
}

export const addPanel = (title: string): IPanelAddAction => ({
  type: ADD_PANEL,
  payload: {
    title,
  },
});

export const deletePanel = (id: string): IPanelDeleteAction => ({
  type: DELETE_PANEL,
  payload: {
    id,
  },
});
