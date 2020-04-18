import initalState from '../../data/inital-state';
import { tasksSelector } from '../task';

describe('Tasks Selector', () => {
  it('should return all tasks from state', () => {
    expect(tasksSelector(initalState)).toEqual(initalState.tasks);
  });
});
