import { IAppState } from '../common/state';

export const moveSelector = (state: IAppState) => state.move;
export const moveTaskAboveId = (state: IAppState) => state.move.to.taskId;
