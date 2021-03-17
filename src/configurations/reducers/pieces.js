import {
    BOARD_ACTION_CLOSE,
    PIECE_ACTION_REMOVE_PIECE,
    PIECE_ACTION_RESET_PIECE,
    PIECE_ACTION_SHUFFLE,
} from '../actions';
import { default as piecesConfig } from '../pieces';

const initialState = {
    stack: [],
    recent: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case PIECE_ACTION_RESET_PIECE:
            const stack = piecesConfig[Math.floor(Math.random() * piecesConfig.length)];
            let recent = [];
            for (let i = 0; i < 3; i++) {
                const pieceIndex = Math.floor(Math.random() * stack.length);
                recent.push(stack.splice(pieceIndex, 1).pop());
            }
            return {
                stack,
                recent,
            };
        case PIECE_ACTION_SHUFFLE:
            let newStack = [];
            newStack.concat(state.stack, state.recent);
            let newRecent = [];
            for (let i = 0; i < 3; i++) {
                const pieceIndex = Math.floor(Math.random() * newStack.length);
                newRecent.push(newStack.splice(pieceIndex, 1).pop());
            }
            return {
                stack: newStack,
                recent: newRecent,
            };
        case PIECE_ACTION_REMOVE_PIECE:
            const { index } = payload;
            if (state.stack.length > 0) {
                newStack = [].concat(state.stack);
                newRecent = [].concat(state.recent);
                const pieceIndex = Math.floor(Math.random() * newStack.length);
                newRecent[index] = newStack.splice(pieceIndex, 1).pop();
                return {
                    stack: newStack,
                    recent: newRecent,
                };
            } else {
                newRecent = [].concat(state.recent);
                newRecent.splice(index, 1);
                return {
                    stack: state.stack,
                    recent: newRecent,
                };
            }
        case BOARD_ACTION_CLOSE:
            return {
                stack: [],
                recent: [],
            };
        default:
            return state;
    }
};
