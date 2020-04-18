import initalState from '../../data/inital-state';
import { tasksReducer } from '../task';
import {
  ADD_TASK,
  EDIT_TASK,
  ON_PANEL_CREATE,
} from '../../actions/types';

describe('Panel Reducer', () => {
  it('should be able to handle ON_PANEL_CREATE action', () => {
    const payload = {
      panelId: '_4zdwque1s',
    };

    const expectedState = {
      tasksIDByPanel: {
        ...initalState.tasks.tasksIDByPanel,
        [payload.panelId]: [],
      },
      tasksHash: {
        ...initalState.tasks.tasksHash,
      },
    };

    expect(
      tasksReducer(initalState.tasks, {
        payload,
        type: ON_PANEL_CREATE,
      })).toEqual(expectedState);
  });

  it('should be able to handle ADD_TASK action', () => {
    const payload = {
      id: '_wf1wywjzn',
      body: 'New Task',
      panelId: '_ez8kp634q',
    };

    const expectedState = {
      tasksIDByPanel: {
        ...initalState.tasks.tasksIDByPanel,
        [payload.panelId]: [
          ...(initalState.tasks.tasksIDByPanel[payload.panelId] || []),
          payload.id,
        ],
      },
      tasksHash: {
        ...initalState.tasks.tasksHash,
        [payload.id]: {
          id: payload.id,
          body: payload.body,
        },
      },
    };

    expect(
      tasksReducer(initalState.tasks, {
        payload,
        type: ADD_TASK,
      })).toEqual(expectedState);
  });

  it('should be able to handle EDIT_TASK action', () => {
    const payload = {
      id: '_qvf8cg4dn',
      body: 'Edited Body Of Task A',
    };

    const expectedState = {
      tasksHash: {
        ...initalState.tasks.tasksHash,
        [payload.id]: {
          id: payload.id,
          body: payload.body,
        },
      },
      tasksIDByPanel: {
        ...initalState.tasks.tasksIDByPanel,
      },
    };

    expect(
      tasksReducer(initalState.tasks, {
        payload,
        type: EDIT_TASK,
      })).toEqual(expectedState);
  });
});
