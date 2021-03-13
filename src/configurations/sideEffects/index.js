import board from './board';
import pieces from './pieces';
import { all } from 'redux-saga/effects';

export default () =>
    function* rootSaga() {
        yield all([board()(), pieces()()]);
    };
