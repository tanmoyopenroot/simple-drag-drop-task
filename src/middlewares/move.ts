import { Middleware, Action } from 'redux';

import { IAppState } from '../common/state';
import { ITaskMoveAction } from '../actions/task';
import { MOVE_TASK } from '../actions/types';

export const moveMiddleware: Middleware<{}, IAppState> =
  ({ getState }) => next => (action: ITaskMoveAction): Action => {
    const { type } = action;
    const { move } = getState();

    if (type === MOVE_TASK) {
      return next({
        type: MOVE_TASK,
        payload: {
          ...move,
        },
      });
    }

    return next(action);
  };
