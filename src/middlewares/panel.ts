import { Middleware, Action } from 'redux';

import idGenerator from '../utils/id-generator';
import { IAppState } from '../common/state'
import { IPanelAddAction } from '../actions/panel';
import {
  ADD_PANEL,
  ON_PANEL_CREATE,
} from '../actions/types';

export const panelMiddleware: Middleware<{}, IAppState> =
  () => next => (action: IPanelAddAction): Action => {
    const { type, payload } = action;

    if (type === ADD_PANEL) {
      const panelId = idGenerator();

      next({
        type: ADD_PANEL,
        payload: {
          id: panelId,
          ...payload,
        },
      });

      return next({
        type: ON_PANEL_CREATE,
        payload: {
          panelId,
        },
      });
    }

    return next(action);
  };
