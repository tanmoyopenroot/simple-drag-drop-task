import { Action } from 'redux';

import {
  TasksStateType,
  ITaskEditAction,
} from '../actions/task';
import { MoveTaskStateType } from '../actions/move';
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MOVE_TASK,
  ON_PANEL_CREATE,
} from '../actions/types';

interface IOnPanelCreateAction extends Action {
  type: typeof ON_PANEL_CREATE;
  payload: {
    panelId: string;
  };
}

interface ITaskAddAction extends Action {
  type: typeof ADD_TASK;
  payload: {
    id: string;
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

interface ITaskMoveAction extends Action {
  type: typeof MOVE_TASK;
  payload: MoveTaskStateType;
}

const initialState: TasksStateType = {
  tasksIDByPanel: {},
  tasksHash: {},
};

export const tasksReducer = (
  state: TasksStateType = initialState,
  action: IOnPanelCreateAction
    | ITaskAddAction
    | ITaskDeleteAction
    | ITaskMoveAction
    | ITaskEditAction,
): TasksStateType => {
  const { type } = action;

  switch (type) {
    case ON_PANEL_CREATE: {
      const { payload } = action as IOnPanelCreateAction;

      return {
        tasksIDByPanel: {
          ...state.tasksIDByPanel,
          [payload.panelId]: [],
        },
        tasksHash: {
          ...state.tasksHash,
        },
      };
    }

    case ADD_TASK: {
      const { payload } = action as ITaskAddAction;

      return {
        tasksIDByPanel: {
          ...state.tasksIDByPanel,
          [payload.panelId]: [
            ...(state.tasksIDByPanel[payload.panelId] || []),
            payload.id,
          ],
        },
        tasksHash: {
          ...state.tasksHash,
          [payload.id]: {
            id: payload.id,
            body: payload.body,
          },
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

    case MOVE_TASK: {
      const {
        payload: {
          from,
          to,
        },
      } = action as ITaskMoveAction;

      if (from.taskId === to.taskId) {
        return state;
      }

      if (from.panelId === to.panelId) {
        const toIndex = state.tasksIDByPanel[from.panelId].findIndex(id => id === to.taskId);
        const arrayToReplace = state.tasksIDByPanel[from.panelId].filter(id => id !== from.taskId);
        arrayToReplace.splice(toIndex, 0, from.taskId);

        return {
          tasksHash: {
            ...state.tasksHash,
          },
          tasksIDByPanel: {
            ...state.tasksIDByPanel,
            [from.panelId]: arrayToReplace,
          },
        };
      }

      const toIndex = state.tasksIDByPanel[to.panelId]
        .findIndex(id => id === to.taskId);
      const fromArrayToReplace = state.tasksIDByPanel[from.panelId]
        .filter(id => id !== from.taskId);
      const toArrayToReplace = state.tasksIDByPanel[to.panelId];
      toArrayToReplace.splice(toIndex, 0, from.taskId);

      return {
        tasksHash: {
          ...state.tasksHash,
        },
        tasksIDByPanel: {
          ...state.tasksIDByPanel,
          [from.panelId]: fromArrayToReplace,
          [to.panelId]: toArrayToReplace,
        },
      };
    }

    case EDIT_TASK: {
      const {
        payload: {
          id,
          body,
        },
      } = action as ITaskEditAction;

      return {
        tasksHash: {
          ...state.tasksHash,
          [id]: {
            id,
            body,
          },
        },
        tasksIDByPanel: {
          ...state.tasksIDByPanel,
        },
      };
    }

    default:
      return state;
  }
};
