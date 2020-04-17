import { Action } from 'redux';
import { ITaskModal } from '../modals/task';
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MOVE_TASK,
} from './types';

export type TasksStateType = Readonly<{
  tasksIDByPanel: { [key: string]: string[]; },
  tasksHash: { [key: string]: ITaskModal; },
}>;

export interface ITaskAddAction extends Action {
  type: typeof ADD_TASK;
  payload: {
    body: string;
    panelId: string;
  };
}

interface ITaskDeleteAction extends Action {
  type: typeof DELETE_TASK;
  payload: {
    id: string;
    panelId: string;
  };
}

export interface ITaskEditAction extends Action {
  type: typeof EDIT_TASK;
  payload: {
    id: string;
    body: string;
  };
}

export interface ITaskMoveAction extends Action {
  type: typeof MOVE_TASK;
}

export const addTask = (
  payload: {
    body: string;
    panelId: string;
  },
): ITaskAddAction => ({
  payload,
  type: ADD_TASK,
});

export const deleteTask = (
  payload: {
    id: string;
    panelId: string;
  },
): ITaskDeleteAction => ({
  payload,
  type: DELETE_TASK,
});

export const editTask = (
  payload: {
    id: string;
    body: string;
  },
): ITaskEditAction => ({
  payload,
  type: EDIT_TASK,
});

export const moveTask = (): ITaskMoveAction => ({ type: MOVE_TASK });
