import { panelMiddleware } from './panel';
import { taskMiddleware } from './tasks';

export default [
  panelMiddleware,
  taskMiddleware,
];
