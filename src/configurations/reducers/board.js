import { cloneDeep } from 'lodash';
import {
    BOARD_ACTION_DROP_PIECE_SUCCESS,
    BOARD_ACTION_REVERSE_PIECE,
    BOARD_ACTION_SET_MAP,
    BOARD_ACTION_REVERSE_PIECE_END,
    BOARD_ACTION_DROP_PIECE,
} from '../actions';

const initialTiles = [];

for (let i = 0; i < 25; i++) {
    initialTiles.push({ index: i, hide: true });
}

const initialState = {
    name: '',
    tiles: initialTiles,
    reversePiece: -1,
    moveCount: 10,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case BOARD_ACTION_SET_MAP:
            console.log('Reset map with name', payload.name);
            // TODO: load level config
            return {
                name: payload.name,
                tiles: initialTiles,
                reversePiece: -1,
                moveCount: 0,
            };
        case BOARD_ACTION_DROP_PIECE:
            return {
                ...state,
                moveCount: state.moveCount - 1,
            };
        case BOARD_ACTION_DROP_PIECE_SUCCESS:
            console.log('Show correct tiles with dropped piece');
            const newState = cloneDeep(state);
            const { piece } = payload;
            piece.tiles.forEach((tileIndex) => {
                if (tileIndex > -1) {
                    newState.tiles[tileIndex].hide = false;
                }
            });
            return newState;
        case BOARD_ACTION_REVERSE_PIECE:
            const { index } = payload;
            return {
                ...state,
                reversePiece: index,
            };
        case BOARD_ACTION_REVERSE_PIECE_END:
            return {
                ...state,
                reversePiece: -1,
            };
        default:
            return state;
    }
};
