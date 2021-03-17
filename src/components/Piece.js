import { memoize } from 'lodash';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Draggable from 'react-native-draggable';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ImageConfig } from '../configurations';
import { boardDropPiece, boardReversePieceEnd } from '../configurations/actions';
import { getReversePieceIndex } from '../configurations/selectors';
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
    const { name, scale, config, draggable, index } = props;

    const { col, row, tiles } = config;

    const styles = createStyle(col, row, scale);

    const [shouldReverse, setShouldReverse] = useState(false);
    const [lastPosition, setLastPosition] = useState();
    const [reset, setReset] = useState(false);
    const reversePiece = useSelector(getReversePieceIndex);

    const dispatch = useDispatch();

    const pieceRef = useRef();
    const lastPieceConfig = useRef();

    const onLayout = useCallback(() => {
        pieceRef.current.measureInWindow((x, y, width, height) => {
            console.log('Piece location', x, y);
            setLastPosition({ x, y });
            pieceRef.current.firstPosition = { x, y };
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
                dispatch(boardDropPiece(config, dropPosition, index));
                setLastPosition(lastPos);
            } else {
                setShouldReverse(true);
            }
        },
        [index, config, lastPosition, dispatch],
        shallowEqual
    );

    const onReverse = useCallback(() => {
        if (pieceRef.current && pieceRef.current.firstPosition) {
            setLastPosition(pieceRef.current.firstPosition);
        }
    }, []);

    useEffect(() => {
        if (reversePiece === index) {
            setShouldReverse(true);
        }
        return () => {
            dispatch(boardReversePieceEnd());
        };
    }, [index, dispatch, reversePiece]);

    useEffect(() => {
        if (shouldReverse === true) {
            setShouldReverse(false);
        }
    }, [shouldReverse]);

    useEffect(() => {
        // reset lại drag component
        if (lastPieceConfig.current && lastPieceConfig.current !== config) {
            setReset(true);
        }
        lastPieceConfig.current = config;
    }, [config]);

    useEffect(() => {
        if (reset === true) {
            setReset(false);
        } else {
            // xác định lại vị trí khởi tạo do thay đổi piece config
            pieceRef.current.measureInWindow((x, y, width, height) => {
                console.log('Piece location', x, y);
                setLastPosition({ x, y });
                pieceRef.current.firstPosition = { x, y };
            });
        }
    }, [reset]);

    return (
        <View style={styles.shape} ref={pieceRef} onLayout={onLayout}>
            {reset ? (
                <></>
            ) : (
                <Draggable
                    onDragRelease={onDragRelease}
                    shouldReverse={shouldReverse}
                    onReverse={onReverse}
                    disabled={!draggable}>
                    <View style={styles.shape}>
                        {tiles.map((imageIndex) => {
                            return <Tile key={imageIndex} index={imageIndex} name={name} scale={scale} />;
                        })}
                    </View>
                </Draggable>
            )}
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
    index: number,
};

Piece.defaultProps = {
    draggable: true,
};

export default Piece;
