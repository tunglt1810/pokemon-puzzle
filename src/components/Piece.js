import { memoize } from 'lodash';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ImageConfig } from '../configurations';
import Tile from './Tile';

const createStyle = memoize((numOfCol, numOfRow, scale) => {
    return StyleSheet.create({
        shape: {
            width: numOfCol * (Math.floor(scale * ImageConfig.tileSize) + 2),
            height: numOfRow * (Math.floor(scale * ImageConfig.tileSize) + 2),
            flexDirection: 'row',
            flexWrap: 'wrap',
            // borderColor: Colors.dark,
            // borderStyle: 'solid',
            // borderWidth: 1,
        },
    });
});

const Piece = (props) => {
    const { name, scale, config } = props;

    const { col, row, tiles } = config;

    const styles = createStyle(col, row, scale);

    return (
        <View style={styles.shape}>
            {tiles.map((imageIndex) => {
                return <Tile key={imageIndex} index={imageIndex} name={name} scale={scale} />;
            })}
        </View>
    );
};

Piece.propTypes = {
    name: string,
    scale: number,
    config: shape({
        row: number,
        col: number,
        tiles: arrayOf(number),
    }),
};

export default Piece;
