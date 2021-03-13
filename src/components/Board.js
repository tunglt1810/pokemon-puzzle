import { arrayOf, bool, number, shape, string } from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { shallowEqual, useSelector } from 'react-redux';
import { ImageConfig } from '../configurations';
import { getBoard } from '../configurations/selectors';
import { BoardUtils } from '../utils';
import Tile from './Tile';

const styles = StyleSheet.create({
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

const initHiddenState = [];
for (let i = 0; i < 25; i++) {
    initHiddenState.push(false);
}

const Board = (props) => {
    const { name } = props;

    const board = useSelector(getBoard, shallowEqual);

    // TODO: thay bằng connect store
    const [hiddenState, setHiddenState] = useState(initHiddenState);

    const boardRef = useRef();

    const onLayout = useCallback((event) => {
        boardRef.current.measureInWindow((x, y, width, height) => {
            BoardUtils.setDropArea(x, y, width, height);
        });
    }, []);

    return (
        <View style={styles.shape} ref={boardRef} onLayout={onLayout}>
            {board.tiles.map((tile, index) => {
                return <Tile key={index} index={index} name={name} hide={tile.hide} />;
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
