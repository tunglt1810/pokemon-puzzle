export const PIECE_ACTION_ADD_PIECE = 'PIECE_ACTION_ADD_PIECE';
export const PIECE_ACTION_REMOVE_PIECE = 'PIECE_ACTION_REMOVE_PIECE';
export const PIECE_ACTION_RESET_PIECE = 'PIECE_ACTION_RESET_PIECE';
export const PIECE_ACTION_SHUFFLE = 'PIECE_ACTION_SHUFFLE';

export const pieceAddPiece = (piece) => ({
    type: PIECE_ACTION_ADD_PIECE,
    payload: {
        piece,
    },
});

export const pieceRemovePiece = (index) => ({
    type: PIECE_ACTION_REMOVE_PIECE,
    payload: {
        index,
    },
});

export const pieceResetPieces = () => ({
    type: PIECE_ACTION_RESET_PIECE,
});
