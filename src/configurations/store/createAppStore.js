import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from '../reducers';
import { all, fork } from 'redux-saga/effects';
import sideEffects from '../sideEffects';

const persistConfig = {
    key: 'persist-state-key',
    storage: AsyncStorage,
    whitelist: [],
    blacklist: [],
};

const createAppStore = () => {
    const persistedReducer = persistReducer(persistConfig, reducer);

    const saga = function* rootSaga() {
        yield all([sideEffects()].map(fork));
    };
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware()));

    // Middleware: Redux Persist Persister
    let persistor = persistStore(store);

    sagaMiddleware.run(saga);

    return {
        store,
        persistor,
    };
};

export default createAppStore;
