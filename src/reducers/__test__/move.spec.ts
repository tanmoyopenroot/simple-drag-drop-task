import initalState from '../../data/inital-state';
import { moveReducer } from '../move';
import {
  MOVE_FROM,
  MOVE_TO,
} from '../../actions/types';

describe('Move Reducer', () => {
  it('should be able to handle MOVE_FROM action', () => {
    expect(
      moveReducer(initalState.move, {
        type: MOVE_FROM,
        payload: {
          panelId: '_n9vue04h1',
          taskId: '_lgizs5jh1',
        },
      })).toEqual({
        from: {
          panelId: '_n9vue04h1',
          taskId: '_lgizs5jh1',
        },
        to: {
          taskId: '',
          panelId: '',
        },
      });
  });

  it('should be able to handle MOVE_TO action', () => {
    expect(
      moveReducer(initalState.move, {
        type: MOVE_TO,
        payload: {
          panelId: '_vmrkktwtq',
          taskId: '_qvf8cg4dn',
        },
      })).toEqual({
        from: {
          taskId: '',
          panelId: '',
        },
        to: {
          panelId: '_vmrkktwtq',
          taskId: '_qvf8cg4dn',
        },
      });
  });
});
