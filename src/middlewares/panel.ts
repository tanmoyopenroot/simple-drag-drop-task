import { Middleware, Action } from 'redux';

import { IAppState } from '../common/state'
import { IPanelAddAction } from '../actions/panel';
import { ADD_PANEL } from '../actions/types';
import idGenerator from '../utils/id-generator';

export const panelMiddleware: Middleware<{}, IAppState> =
  () => next => (action: IPanelAddAction): Action => {
    const { type, payload } = action;

    if (type === ADD_PANEL) {
      return next({
        type: ADD_PANEL,
        payload: {
          id: idGenerator(),
          ...payload,
        },
      });
    }

    return next(action);
  };
