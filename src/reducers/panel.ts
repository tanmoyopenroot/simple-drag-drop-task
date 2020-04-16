import { Action } from 'redux';

import { IPanelModal } from '../modals/panel';
import { PanelsStateType } from '../actions/panel';
import {
  ADD_PANEL,
  DELETE_PANEL,
} from '../actions/types';

interface IPanelAddAction extends Action {
  type: typeof ADD_PANEL;
  payload: IPanelModal;
}

interface IPanelDeleteAction extends Action {
  type: typeof DELETE_PANEL;
  payload: {
    id: string;
  };
}

const initialState: PanelsStateType = {
  panelsID: [],
  panelsHash: {},
};

export const panelsReducer = (
  state: PanelsStateType = initialState,
  action: IPanelAddAction | IPanelDeleteAction,
): PanelsStateType => {
  const { type } = action;

  switch (type) {
    case ADD_PANEL: {
      const { payload } = action as IPanelAddAction;

      return {
        panelsID: [
          ...state.panelsID,
          payload.id,
        ],
        panelsHash: {
          ...state.panelsHash,
          [payload.id]: payload,
        },
      };
    }

    case DELETE_PANEL:
      const { payload } = action as IPanelDeleteAction;
      const panelsHash = { ...state.panelsHash };

      Reflect.deleteProperty(panelsHash, payload.id);

      return {
        panelsHash,
        panelsID: state.panelsID.filter(id => id !== payload.id),
      };

    default:
      return state;
  }
};
