import { panelsReducer } from './panel';
import { tasksReducer } from './task';
import { moveReducer } from './move';

export default {
  panels: panelsReducer,
  tasks: tasksReducer,
  move: moveReducer,
};
