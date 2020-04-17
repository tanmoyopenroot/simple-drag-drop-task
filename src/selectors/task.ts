import { IAppState } from '../common/state';

export const tasksSelector = (state: IAppState) => state.tasks;
