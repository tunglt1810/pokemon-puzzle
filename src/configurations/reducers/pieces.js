import { PIECE_ACTION_REMOVE_PIECE, PIECE_ACTION_RESET_PIECE, PIECE_ACTION_SHUFFLE } from '../actions';
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
                recent.push(stack.splice(pieceIndex, 1));
            }
            return {
                stack,
                recent,
            };
        case PIECE_ACTION_SHUFFLE:
            const newStack = [];
            newStack.concat(state.stack, state.recent);
            recent = [];
            for (let i = 0; i < 3; i++) {
                const pieceIndex = Math.floor(Math.random() * newStack.length);
                recent.push(newStack.splice(pieceIndex, 1));
            }
            return {
                stack: newStack,
                recent,
            };
        case PIECE_ACTION_REMOVE_PIECE:
            break;
        default:
            return state;
    }
};
