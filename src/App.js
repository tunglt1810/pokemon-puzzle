/**
 * Piece puzzle
 * @author TungLT
 * @constant tungluong2809@gmail.com
 */

import React, { Suspense } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Game, LazyLoad } from './components';
import { createAppStore } from './configurations';

const { store, persistor } = createAppStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<LazyLoad />} persistor={persistor}>
                <Suspense fallback={<></>}>
                    <StatusBar />
                    <Game />
                </Suspense>
            </PersistGate>
        </Provider>
    );
};

export default App;
