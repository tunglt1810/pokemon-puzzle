export const BOARD_ACTION_SET_MAP = 'BOARD_ACTION_SET_MAP';
export const BOARD_ACTION_DROP_PIECE = 'BOARD_ACTION_DROP_PIECE';
export const BOARD_ACTION_REVERSE_PIECE = 'BOARD_ACTION_REVERSE_PIECE';
export const BOARD_ACTION_REVERSE_PIECE_END = 'BOARD_ACTION_REVERSE_PIECE_END';
export const BOARD_ACTION_DROP_PIECE_SUCCESS = 'BOARD_ACTION_DROP_PIECE_SUCCESS';
export const BOARD_ACTION_FINISH = 'BOARD_ACTION_FINISH';
export const BOARD_ACTION_CLOSE = 'BOARD_ACTION_CLOSE';

export const boardSetMap = (mapName) => ({
    action: BOARD_ACTION_SET_MAP,
    payload: {
        mapName,
    },
});

/**
 * Drop piece action
 * @typedef PieceConfig - render config of piece
 * @type {Object}
 * @property {number} col - the number of column in piece
 * @property {number} row - the number of row in piece
 * @property {number[]} tiles - the tiles index in piece
 * @typedef DropPosition - drop position of drop event
 * @property {number} colIndex - the index of drop point, relative with board
 * @property {number} rowIndex - the index of drop point, relative with board
 * @param {PieceConfig} piece - config of the dropped piece
 * @param {DropPosition} dropPosition - drop position
 *
 * @example boardDropPiece({col: 3, row: 1, tiles: [1,2,3]}, {rowIndex: 0, colIndex: 0})
 */
export const boardDropPiece = (piece, dropPosition, pieceIndex) => ({
    type: BOARD_ACTION_DROP_PIECE,
    payload: {
        piece,
        dropPosition,
        pieceIndex,
    },
});

export const boardReversePiece = (index) => ({
    type: BOARD_ACTION_REVERSE_PIECE,
    payload: {
        index,
    },
});

export const boardReversePieceEnd = () => ({
    type: BOARD_ACTION_REVERSE_PIECE_END,
});

export const boardDropPieceSuccess = (payload) => ({
    type: BOARD_ACTION_DROP_PIECE_SUCCESS,
    payload,
});

export const boardFinish = () => ({
    type: BOARD_ACTION_FINISH,
});

export const boardClsoe = () => ({ type: BOARD_ACTION_CLOSE });
