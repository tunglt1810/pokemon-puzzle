import { bool, number, string } from 'prop-types';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ImageCollection from '../assets/images';
import { ImageConfig } from '../configurations';

const styles = StyleSheet.create({
    stretch: {
        width: ImageConfig.tileSize,
        height: ImageConfig.tileSize,
        resizeMode: 'contain',
        margin: 1,
    },
    transparent: {
        width: ImageConfig.tileSize,
        height: ImageConfig.tileSize,
        resizeMode: 'contain',
        margin: 1,
        opacity: 0,
    },
});

const Tile = React.memo((props) => {
    const { name, index } = props;

    const row = Math.floor(index / 5) + 1;
    const column = (index % 5) + 1;
    const path = `row-${row}-col-${column}`;

    return (
        <Image style={styles.stretch} source={ImageCollection[name][path]} />
    );
});

Tile.propTypes = {
    name: string,
    index: number,
    hide: bool,
    transparent: bool,
};

Tile.defaultProps = {
    index: 0,
    hide: false,
    transparent: false,
};

export default Tile;
