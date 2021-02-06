import { memoize } from 'lodash';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tile from './Tile';

const createStyle = memoize((numOfCol, numOfRow) => {
    return StyleSheet.create({
        shape: {
            width: numOfCol * 114,
            height: numOfRow * 114,
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
    });
});

const Shape = (props) => {
    const { name, numOfCol, numOfRow, tiles } = props;

    const styles = createStyle(numOfCol, numOfRow);

    return (
        <View style={styles.shape}>
            {tiles.map((element) => {
                const { index, hide } = element;
                return (
                    <Tile id={index} index={index} name={name} hide={hide} />
                );
            })}
        </View>
    );
};

Shape.propTypes = {
    name: string,
    numOfCol: number,
    numOfRow: number,
    tiles: arrayOf(shape({ index: number, hide: bool })),
};

export default Shape;
