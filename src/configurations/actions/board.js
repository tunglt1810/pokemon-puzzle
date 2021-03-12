export const BOARD_ACTION_SET_MAP = 'BOARD_ACTION_SET_MAP';
export const BOARD_ACTION_DROP_PIECE = 'BOARD_ACTION_DROP_PIECE';
export const BOARD_ACTION_DROP_PIECE_SUCCESS = 'BOARD_ACTION_DROP_PIECE_SUCCESS';

export const boardSetMap = (mapName) => ({
    action: BOARD_ACTION_SET_MAP,
    payload: {
        mapName,
    },
});

export const boardDropPiece = (piece) => ({
    action: BOARD_ACTION_DROP_PIECE,
    payload: {
        piece,
    },
});
