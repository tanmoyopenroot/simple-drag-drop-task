import { panelMiddleware } from './panel';
import { taskMiddleware } from './tasks';
import { moveMiddleware } from './move';

export default [
  panelMiddleware,
  taskMiddleware,
  moveMiddleware,
];
