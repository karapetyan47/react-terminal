import {
  ATTEMPT_RUN_COMMAND,
  CHANGE_ACTIVE_CONSOLE,
  CHANGE_COLORS,
  CLEAR_TERMINAL,
  CLOSE_CONSOLE,
  CREATE_CONSOLE,
  RUN_COMMAND_SUCCEED,
} from './actions';

const initialState = {
  consoles: [
    {
      id: 'Initial terminal',
      consoleHistory: [],
      commandsHistory: [],
    },
  ],
  textColor: '#3498db',
  backgroundColor: ' rgba(0, 0, 0, 0.7)',
  consolesCount: 1,
  commandLoading: false,
  activeConsoleId: 'Initial terminal',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_CONSOLE:
      return {
        ...state,
        consoles: [
          ...state.consoles,
          {
            id: payload.id,
            consoleHistory: [],
            commandsHistory: [],
          },
        ],
        consolesCount: state.consolesCount + 1,
        activeConsoleId: payload.id,
      };
    case CHANGE_ACTIVE_CONSOLE:
      return {
        ...state,
        activeConsoleId: payload,
      };
    case CLOSE_CONSOLE: {
      const consoleIdx = state.consoles.findIndex(({ id }) =>
        payload ? id === payload : id === state.activeConsoleId,
      );
      return {
        ...state,
        consoles: [...state.consoles.slice(0, consoleIdx), ...state.consoles.slice(consoleIdx + 1)],
        activeConsoleId: state.consoles[consoleIdx - 1]
          ? state.consoles[consoleIdx - 1].id
          : state.consoles[consoleIdx + 1].id,
        consolesCount: state.consolesCount - 1,
      };
    }
    case ATTEMPT_RUN_COMMAND: {
      const consoleIdx = state.consoles.findIndex(({ id }) => id === state.activeConsoleId);
      const clos = [...state.consoles];
      clos[consoleIdx] = {
        ...clos[consoleIdx],
        consoleHistory: [
          ...clos[consoleIdx].consoleHistory,
          { type: payload.type, data: payload.data.join(' ') },
        ],
        commandsHistory: [...clos[consoleIdx].commandsHistory, payload.data.join(' ')],
      };
      return {
        ...state,
        commandLoading: true,
        consoles: clos,
      };
    }
    case RUN_COMMAND_SUCCEED: {
      const result = payload.map((p) => p.data.entries || []);
      const consoleIdx = state.consoles.findIndex(({ id }) => id === state.activeConsoleId);
      const clos = [...state.consoles];
      clos[consoleIdx] = {
        ...clos[consoleIdx],
        consoleHistory: [...clos[consoleIdx].consoleHistory, { type: 'result', data: result }],
      };
      return {
        ...state,
        commandLoading: false,
        consoles: clos,
      };
    }
    case CHANGE_COLORS:
      return {
        ...state,
        textColor: payload.text,
        backgroundColor: payload.bg,
      };

    case CLEAR_TERMINAL: {
      const consoleIdx = state.consoles.findIndex(({ id }) => id === state.activeConsoleId);
      const clos = [...state.consoles];
      clos[consoleIdx] = {
        ...clos[consoleIdx],
        consoleHistory: [],
      };
      return {
        ...state,
        consoles: clos,
      };
    }
    default:
      return state;
  }
};

export default reducer;
