import { PanelsStateType } from '../actions/panel';
import { TasksStateType } from '../actions/task';

export interface IAppState {
  panels: PanelsStateType;
  tasks: TasksStateType;
}
