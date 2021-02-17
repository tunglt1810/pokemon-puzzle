import { arrayOf, bool, number, shape, string } from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ImageConfig } from '../configurations';
import Tile from './Tile';

const styles = StyleSheet.create({
    shape: {
        width: ImageConfig.boardSize,
        height: ImageConfig.boardSize,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: Colors.dark,
        borderStyle: 'solid',
        borderWidth: 1,
    },
});

const initHiddenState = [];
for (let i = 0; i < 25; i++) {
    initHiddenState.push(false);
}

const Board = (props) => {
    const { name } = props;

    const [hiddenState, setHiddenState] = useState(initHiddenState);

    return (
        <View style={styles.shape}>
            {hiddenState.map((value, index) => {
                return <Tile key={index} index={index} name={name} hide={value} />;
            })}
        </View>
    );
};

Board.propTypes = {
    name: string,
    numOfCol: number,
    numOfRow: number,
    tiles: arrayOf(shape({ index: number, hide: bool })),
};

export default Board;
