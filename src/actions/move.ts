import { Action } from 'redux';
import {
  MOVE_FROM,
  MOVE_TO,
} from './types';

export type MoveTaskStateType = Readonly<{
  from: {
    taskId: string;
    panelId: string;
  },
  to: {
    taskId: string;
    panelId: string;
  },
}>;

export interface IMoveFromAction extends Action {
  type: typeof MOVE_FROM;
  payload: {
    taskId: string;
    panelId: string;
  };
}

export interface IMoveToAction extends Action {
  type: typeof MOVE_TO;
  payload: {
    taskId: string;
    panelId: string;
  };
}

export const moveFrom = (
  payload: {
    taskId: string;
    panelId: string;
  },
): IMoveFromAction => ({
  payload,
  type: MOVE_FROM,
});

export const moveTo = (
  payload: {
    taskId: string;
    panelId: string;
  },
): IMoveToAction => ({
  payload,
  type: MOVE_TO,
});
