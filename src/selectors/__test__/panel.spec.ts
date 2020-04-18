import initalState from '../../data/inital-state';
import { panelsSelector } from '../panel';

describe('Panels Selector', () => {
  it('should return all panels from state', () => {
    expect(panelsSelector(initalState)).toEqual(initalState.panels);
  });
});
