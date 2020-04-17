import { PanelsStateType } from '../actions/panel';
import { TasksStateType } from '../actions/task';
import { MoveTaskStateType } from '../actions/move';

export interface IAppState {
  panels: PanelsStateType;
  tasks: TasksStateType;
  move: MoveTaskStateType;
}
