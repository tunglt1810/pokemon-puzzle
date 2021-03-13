import { cloneDeep } from 'lodash';
import { BOARD_ACTION_DROP_PIECE_SUCCESS, BOARD_ACTION_SET_MAP } from '../actions';

const initialTiles = [];

for (let i = 0; i < 25; i++) {
    initialTiles.push({ index: i, hide: true });
}

const initialState = {
    name: '',
    tiles: initialTiles,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case BOARD_ACTION_SET_MAP:
            console.log('Reset map with name', payload.name);
            return {
                name: payload.name,
                tiles: initialTiles,
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
        default:
            return state;
    }
};
