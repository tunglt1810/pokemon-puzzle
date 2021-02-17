import { memoize } from 'lodash';
import { bool, number, string } from 'prop-types';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ImageCollection from '../assets/images';
import { ImageConfig } from '../configurations';

const createStyle = memoize((scale) => {
    const tileSize = Math.floor(scale * ImageConfig.tileSize);
    return StyleSheet.create({
        stretch: {
            width: tileSize,
            height: tileSize,
            resizeMode: 'contain',
            margin: 1,
        },
        transparent: {
            width: tileSize,
            height: tileSize,
            resizeMode: 'contain',
            margin: 1,
            opacity: 0,
        },
    });
});

const Tile = React.memo((props) => {
    const { name, index, hide, scale } = props;
    const styles = createStyle(scale);

    if (hide) {
        return <Image style={styles.stretch} source={ImageCollection.hidden} />;
    }

    if (index === -1) {
        return <Image style={styles.transparent} source={ImageCollection.hidden} />;
    }

    const row = Math.floor(index / 5) + 1;
    const column = (index % 5) + 1;
    const path = `row-${row}-col-${column}`;

    console.log('image path', path);

    return <Image style={styles.stretch} source={ImageCollection[name][path]} />;
});

Tile.propTypes = {
    name: string,
    index: number,
    hide: bool,
    scale: number,
};

Tile.defaultProps = {
    index: -1,
    hide: false,
    scale: 1,
};

export default Tile;
