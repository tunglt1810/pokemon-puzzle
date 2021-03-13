import { all, takeEvery } from 'redux-saga/effects';
import { PIECE_ACTION_ADD_PIECE } from '../actions';

const addPieceHandler = function* (action) {
    console.log('Handle add piece action', action);
};

export default () =>
    function* watchPieceActions() {
        yield all([yield takeEvery(PIECE_ACTION_ADD_PIECE, addPieceHandler)]);
    };
