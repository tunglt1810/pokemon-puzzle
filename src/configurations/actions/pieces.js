export const PIECE_ACTION_ADD_PIECE = 'PIECE_ACTION_ADD_PIECE';
export const PIECE_ACTION_REMOVE_PIECE = 'PIECE_ACTION_REMOVE_PIECE';
export const PIECE_ACTION_RESET_PIECE = 'PIECE_ACTION_RESET_PIECE';

export const pieceAddPiece = (piece) => ({
    type: PIECE_ACTION_ADD_PIECE,
    payload: {
        piece,
    },
});

export const pieceRemovePiece = (piece) => ({
    type: PIECE_ACTION_REMOVE_PIECE,
    payload: {
        piece,
    },
});

export const pieceResetPieces = () => ({
    type: PIECE_ACTION_RESET_PIECE,
});
