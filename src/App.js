/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Board } from './components';

const board = [];
for (let i = 0; i < 25; i++) {
    board.push({ index: i, hide: false });
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // justifyContent: 'space-around',
        // position: 'absolute',
        // width: '100%',
        // height: '100%',
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
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
        backgroundColor: 'red',
    },
    pieces: {
        flex: 2,
        backgroundColor: 'white',
    },
    tools: {
        flex: 2,
        backgroundColor: 'green',
    },
});

const App = () => {
    return (
        <>
            <StatusBar />
            <Text style={styles.header}>Pokemon Puzz</Text>
            <View style={styles.board}>
                <Board
                    name="bulbasaur"
                    numOfCol={5}
                    numOfRow={5}
                    tiles={board}
                />
            </View>
            <View style={styles.pieces}>
                <Text>Pieces</Text>
            </View>
            <View style={styles.tools}>
                <Text>Tools</Text>
            </View>
        </>
    );
};

export default App;
