export const CREATE_CONSOLE = 'CREATE_CONSOLE';
export const CHANGE_ACTIVE_CONSOLE = 'CHANGE_ACTIVE_CONSOLE';
export const ATTEMPT_RUN_COMMAND = 'ATTEMPT_RUN_COMMAND';
export const RUN_COMMAND_SUCCEED = 'RUN_COMMAND_SUCCEED';
export const RUN_COMMAND_FAIL = 'RUN_COMMAND_FAIL';
export const CLOSE_CONSOLE = 'CLOSE_CONSOLE';
export const CHANGE_COLORS = 'CHANGE_COLORS';
export const CLEAR_TERMINAL = 'CLEAR_TERMINAL';

export const createConsole = (payload) => ({ type: CREATE_CONSOLE, payload });

export const changeActiveConsole = (payload) => ({ type: CHANGE_ACTIVE_CONSOLE, payload });

export const attemptRunCommand = (payload) => ({ type: ATTEMPT_RUN_COMMAND, payload });

export const runCommandSucceed = (payload) => ({ type: RUN_COMMAND_SUCCEED, payload });

export const runCommandFail = (payload) => ({ type: RUN_COMMAND_FAIL, payload });

export const closeConsole = (payload) => ({ type: CLOSE_CONSOLE, payload });

export const changeColor = (payload) => ({ type: CHANGE_COLORS, payload });

export const clearTerminal = (payload) => ({ type: CLEAR_TERMINAL });
