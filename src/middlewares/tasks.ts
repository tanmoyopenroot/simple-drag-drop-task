import { Middleware, Action } from 'redux';

import { ITaskAddAction } from '../actions/task';
import { ADD_TASK } from '../actions/types';
import idGenerator from '../utils/id-generator';

export const taskMiddleware: Middleware =
  () => next => (action: ITaskAddAction): Action => {
    const { type, payload } = action;

    if (type === ADD_TASK) {
      return next({
        type: ADD_TASK,
        payload: {
          id: idGenerator(),
          ...payload,
        },
      });
    }

    return next(action);
  };
