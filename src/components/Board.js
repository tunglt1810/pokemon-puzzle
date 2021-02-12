import { memoize } from 'lodash';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ImageConfig } from '../configurations';
import Tile from './Tile';

const createStyle = memoize((numOfCol, numOfRow) => {
    return StyleSheet.create({
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
});

const Board = (props) => {
    const { name, numOfCol, numOfRow, tiles } = props;

    const styles = createStyle(numOfCol, numOfRow);

    return (
        <View style={styles.shape}>
            {tiles.map((element) => {
                const { index, hide } = element;
                return (
                    <Tile key={index} index={index} name={name} hide={hide} />
                );
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
