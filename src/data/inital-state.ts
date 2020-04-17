import { IAppState } from '../common/state';

const state: IAppState = {
  panels: {
    panelsID: [
      '_vmrkktwtq',
      '_ez8kp634q',
      '_n9vue04h1',
    ],
    panelsHash: {
      _vmrkktwtq: {
        id: '_vmrkktwtq',
        title: 'Design',
      },
      _ez8kp634q: {
        id: '_ez8kp634q',
        title: 'Todo',
      },
      _n9vue04h1: {
        id: '_n9vue04h1',
        title: 'Development',
      },
    },
  },
  tasks: {
    tasksIDByPanel: {
      _vmrkktwtq: ['_qvf8cg4dn', '_94r8civnq'],
      _ez8kp634q: ['_nwv2pj98w'],
      _n9vue04h1: [],
    },
    tasksHash: {
      _qvf8cg4dn: {
        id: '_qvf8cg4dn',
        body: 'Body Of Task A',
      },
      _94r8civnq: {
        id: '_94r8civnq',
        body: 'Body Of Task B',
      },
      _nwv2pj98w: {
        id: '_nwv2pj98w',
        body: 'Body Of Task C',
      },
    },
  },
  move: {
    from: {
      taskId: '',
      panelId: '',
    },
    to: {
      taskId: '',
      panelId: '',
    },
  }
};

export default state;
