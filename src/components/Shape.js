import React from 'react';
import { string } from 'prop-types';

const Shape = (props) => {
    const { name } = props;

    return <>Shape {name}</>;
};

Shape.propTypes = {
    name: string,
};

export default Shape;
