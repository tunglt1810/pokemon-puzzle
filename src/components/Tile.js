import React from 'react';
import { bool, number, string } from 'prop-types';
import { Image, StyleSheet } from 'react-native';
import ImageCollection from '../assets/images';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const IMAGE_SIZE = 110;

const styles = StyleSheet.create({
    stretch: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        resizeMode: 'stretch',
        margin: 2,
    },
    transparent: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        resizeMode: 'stretch',
        opacity: 0,
    },
});

const Tile = React.memo((props) => {
    const { name, index } = props;

    console.info('Render tile', name, index);

    const row = Math.floor(index / 8) + 1;
    const column = (index % 8) + 1;
    const path = `row-${row}-col-${column}`;

    console.info('Image path', path);

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
