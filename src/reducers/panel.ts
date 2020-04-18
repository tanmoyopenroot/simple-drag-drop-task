import { Action } from 'redux';

import { IPanelModal } from '../modals/panel';
import { PanelsStateType } from '../actions/panel';
import { ADD_PANEL } from '../actions/types';

interface IPanelAddAction extends Action {
  type: typeof ADD_PANEL;
  payload: IPanelModal;
}

const initialState: PanelsStateType = {
  panelsID: [],
  panelsHash: {},
};

export const panelsReducer = (
  state: PanelsStateType = initialState,
  action: IPanelAddAction,
): PanelsStateType => {
  const { type } = action;

  switch (type) {
    case ADD_PANEL: {
      const { payload } = action as IPanelAddAction;

      return {
        panelsID: [
          ...(state.panelsID || []),
          payload.id,
        ],
        panelsHash: {
          ...state.panelsHash,
          [payload.id]: payload,
        },
      };
    }

    default:
      return state;
  }
};
