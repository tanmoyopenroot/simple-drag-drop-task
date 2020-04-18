import initalState from '../../data/inital-state';
import {
  moveSelector,
  moveTaskAboveId,
} from '../move';

describe('Move Selector', () => {
  it('should return all move from state', () => {
    expect(moveSelector(initalState)).toEqual(initalState.move);
  });

  it('should return all move from state', () => {
    expect(moveTaskAboveId(initalState)).toEqual(initalState.move.to.taskId);
  });
});
