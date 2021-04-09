import { arrayOf, bool, number, shape, string } from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { ImageConfig } from '../configurations';
import { getBoard } from '../configurations/selectors';
import { BoardUtils } from '../utils';
import Tile from './Tile';

import boardBackground from '../assets/images/screens/game/background_board.png';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    background: {
        width: ImageConfig.boardBgrSize,
        height: ImageConfig.boardBgrSize,
        flexDirection: 'row',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    shape: {
        width: ImageConfig.boardSize,
        height: ImageConfig.boardSize,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

const Board = (props) => {
    const { name } = props;

    const board = useSelector(getBoard, shallowEqual);

    const boardRef = useRef();

    const onLayout = useCallback((event) => {
        boardRef.current.measureInWindow((x, y, width, height) => {
            BoardUtils.setDropArea(x, y, width, height);
        });
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={boardBackground} style={styles.background}>
                <View style={styles.shape} ref={boardRef} onLayout={onLayout}>
                    {board.tiles.map((tile, index) => {
                        return <Tile key={index} index={index} name={name} hide={tile.hide} />;
                    })}
                </View>
            </ImageBackground>
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
