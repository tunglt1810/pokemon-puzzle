import { memoize } from 'lodash';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Draggable from 'react-native-draggable';
import { shallowEqual, useDispatch } from 'react-redux';
import { ImageConfig } from '../configurations';
import { boardDropPiece } from '../configurations/actions';
import { BoardUtils } from '../utils';
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

// TODO:  thay đổi scale khi drag
const Piece = (props) => {
    const { name, scale, config, draggable } = props;

    const { col, row, tiles } = config;

    const styles = createStyle(col, row, scale);

    const [shouldReverse, setShouldReverse] = useState(false);
    const [lastPosition, setLastPosition] = useState();
    const dispatch = useDispatch();

    const pieceRef = useRef();

    const onLayout = useCallback(() => {
        pieceRef.current.measureInWindow((x, y, width, height) => {
            console.log('Piece location', x, y);
            setLastPosition({ x, y });
        });
    }, []);

    const onDragRelease = useCallback(
        (event, gestureState) => {
            // const { identifier, locationX, locationY, pageX, pageY, timestamp, touches}
            // console.log('GestureState', gestureState);
            const { dx, dy } = gestureState;
            const lastPos = { x: lastPosition.x + dx, y: lastPosition.y + dy };
            const dropPosition = BoardUtils.checkDropOnBoard(config, lastPos);
            if (dropPosition) {
                dispatch(boardDropPiece(config, dropPosition));
                setLastPosition(lastPos);
            } else {
                setShouldReverse(true);
            }
        },
        [config, lastPosition, dispatch],
        shallowEqual
    );

    useEffect(() => {
        if (shouldReverse === true) {
            setShouldReverse(false);
        }
    }, [shouldReverse]);

    return (
        <View style={styles.shape} ref={pieceRef} onLayout={onLayout}>
            <Draggable onDragRelease={onDragRelease} shouldReverse={shouldReverse} disabled={!draggable}>
                <View style={styles.shape}>
                    {tiles.map((imageIndex) => {
                        return <Tile key={imageIndex} index={imageIndex} name={name} scale={scale} />;
                    })}
                </View>
            </Draggable>
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
    draggable: bool,
};

Piece.defaultProps = {
    draggable: true,
};

export default Piece;
