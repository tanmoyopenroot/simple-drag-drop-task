import { ADD_PANEL } from '../types';
import { addPanel } from '../panel';

describe('Move Action: ', () => {
  test('should call addPanel action', async () => {
    const payload = {
      id: '_frlpu9374',
      title: 'New Panel',
    };

    const expectedAction = {
      payload,
      type: ADD_PANEL,
    };

    expect(addPanel(payload)).toEqual(expectedAction);
  });
});
