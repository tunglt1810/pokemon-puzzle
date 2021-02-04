import React from 'react';
import { string } from 'prop-types';

const Tile = (props) => {
    const { name } = props;
    return <>Tile {name}</>;
};

Tile.propTypes = {
    name: string,
};

export default Tile;
