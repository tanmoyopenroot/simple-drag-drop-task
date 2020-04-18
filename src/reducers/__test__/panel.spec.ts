import initalState from '../../data/inital-state';
import { panelsReducer } from '../panel';
import { ADD_PANEL } from '../../actions/types';

describe('Panel Reducer', () => {
  it('should be able to handle ADD_PANEL action', () => {
    const payload = {
      id: '_4zdwque1s',
      title: 'New Panel',
    };

    const expectedState = {
      panelsID: [
        ...initalState.panels.panelsID,
        payload.id,
      ],
      panelsHash: {
        ...initalState.panels.panelsHash,
        [payload.id]: payload,
      },
    };

    expect(
      panelsReducer(initalState.panels, {
        payload,
        type: ADD_PANEL,
      })).toEqual(expectedState);
  });
});
