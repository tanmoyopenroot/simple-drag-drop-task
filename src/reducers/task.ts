import { Action } from 'redux';

import { TasksStateType } from '../actions/task';
import {
  ADD_TASK,
  DELETE_TASK,
} from '../actions/types';

interface ITaskAddAction extends Action {
  type: typeof ADD_TASK;
  payload: {
    id: string;
    title: string;
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

const initialState: TasksStateType = {
  tasksIDByPanel: {},
  tasksHash: {},
};

export const tasksReducer = (
  state: TasksStateType = initialState,
  action: ITaskAddAction | ITaskDeleteAction,
): TasksStateType => {
  const { type } = action;

  switch (type) {
    case ADD_TASK: {
      const { payload } = action as ITaskAddAction;

      return {
        tasksIDByPanel: {
          ...state.tasksIDByPanel,
          [payload.panelId]: [
            ...state.tasksIDByPanel[payload.panelId],
            payload.id,
          ],
        },
        tasksHash: {
          ...state.tasksHash,
          [payload.id]: payload,
        },
      };
    }

    case DELETE_TASK:
      const { payload } = action as ITaskDeleteAction;
      const tasksHash = { ...state.tasksHash };

      Reflect.deleteProperty(tasksHash, payload.id);

      return {
        tasksHash,
        tasksIDByPanel: {
          ...state.tasksIDByPanel,
          [payload.panelId]: state.tasksIDByPanel[payload.panelId].filter(id => id !== payload.id),
        },
      };

    default:
      return state;
  }
};
