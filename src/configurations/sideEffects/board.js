import { put, takeEvery } from 'redux-saga/effects';
import { boardDropPieceSuccess, boardReversePiece, BOARD_ACTION_DROP_PIECE, pieceRemovePiece } from '../actions';

const boardDropPieceHandler = function* (action) {
    const {
        piece: { col, row, tiles },
        dropPosition: { colIndex, rowIndex },
        pieceIndex,
    } = action.payload;
    console.log('Handle drop piece effect', col, row, tiles, colIndex, rowIndex);
    for (let i = 0; i < row; i += 1) {
        for (let j = 0; j < col; j += 1) {
            const tileIndexOnPiece = i * col + j;
            const tileIndexOnBoard = (rowIndex + i) * 5 + colIndex + j;
            if (tiles[tileIndexOnPiece] > -1 && tiles[tileIndexOnPiece] !== tileIndexOnBoard) {
                console.log('drop wrong pos -> should set piece ' + pieceIndex + ' reverse');
                yield put(boardReversePiece(pieceIndex));
                return;
            }
        }
    }
    console.log('Drop success');
    yield put(boardDropPieceSuccess(action.payload));
    yield put(pieceRemovePiece(action.payload.pieceIndex));
};

export default () =>
    function* watchBoardAction() {
        yield takeEvery(BOARD_ACTION_DROP_PIECE, boardDropPieceHandler);
    };
