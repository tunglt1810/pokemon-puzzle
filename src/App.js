/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Shape } from './components';

const board = [];
for (let i = 0; i < 64; i++) {
    board.push({ index: i, hide: false });
}

const App = () => {
    return (
        <>
            <StatusBar />
            <View>
                <Shape
                    name="bulbasaur"
                    numOfCol={8}
                    numOfRow={8}
                    tiles={board}
                />
            </View>
        </>
    );
};

export default App;
