import {
  MoveTaskStateType,
  IMoveFromAction,
  IMoveToAction,
} from '../actions/move';
import {
  MOVE_FROM,
  MOVE_TO,
} from '../actions/types';

const initialState: MoveTaskStateType = {
  from: {
    taskId: '',
    panelId: '',
  },
  to: {
    taskId: '',
    panelId: '',
  },
};

export const moveReducer = (
  state: MoveTaskStateType = initialState,
  action: IMoveFromAction | IMoveToAction,
): MoveTaskStateType => {
  const { type } = action;

  switch (type) {
    case MOVE_FROM: {
      const { payload } = action as IMoveFromAction;

      return {
        ...state,
        from: payload,
      };
    }

    case MOVE_TO:
      const { payload } = action as IMoveToAction;

      return {
        ...state,
        to: payload,
      };

    default:
      return state;
  }
};
