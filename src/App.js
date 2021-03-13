/**
 * Piece puzzle
 * @author TungLT
 * @constant tungluong2809@gmail.com
 */

import React, { Suspense, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Board, Piece } from './components';
import LazyLoad from './components/LazyLoad';
import { BoardConfig, createAppStore } from './configurations';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        color: Colors.dark,
        backgroundColor: 'yellow',
    },
    board: {
        flex: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    pieces: {
        flex: 2,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tools: {
        flex: 2,
        backgroundColor: 'green',
    },
});

const boardStyle = BoardConfig[Math.floor(Math.random() * (BoardConfig.length - 1))];

console.log('BoardStyle', boardStyle);

const { store, persistor } = createAppStore();
console.log('store', store);
console.log('Persistor', persistor);

const Game = (props) => {
    const { name = 'bulbasaur' } = props;
    const [currentPieces, setCurrentPieces] = useState([0, 1, 2]);

    return (
        <Provider store={store}>
            <PersistGate loading={<LazyLoad />} persistor={persistor}>
                <Suspense fallback={<></>}>
                    <StatusBar />
                    <Text style={styles.header}>Pokemon Puzzle</Text>
                    <View style={styles.board}>
                        <Board name={name} />
                    </View>
                    <View style={styles.pieces}>
                        {currentPieces.map((piece) => {
                            return <Piece key={piece} config={boardStyle[piece]} name={name} scale={0.55} />;
                        })}
                    </View>
                    <View style={styles.tools}>
                        <Text>Tools</Text>
                    </View>
                </Suspense>
            </PersistGate>
        </Provider>
    );
};

export default Game;
