import {
  MOVE_FROM,
  MOVE_TO,
} from '../types';
import {
  moveFrom,
  moveTo,
} from '../move';

describe('Move Action: ', () => {
  test('should call moveFrom action', async () => {
    const payload = {
      panelId: '_vmrkktwtq',
      taskId: '_qvf8cg4dn',
    };

    const expectedAction = {
      payload,
      type: MOVE_FROM,
    };

    expect(moveFrom(payload)).toEqual(expectedAction);
  });

  test('should call moveTo action', async () => {
    const payload = {
      panelId: '_vmrkktwtq',
      taskId: '_qvf8cg4dn',
    };

    const expectedAction = {
      payload,
      type: MOVE_TO,
    };

    expect(moveTo(payload)).toEqual(expectedAction);
  });
});
