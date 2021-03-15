/**
 * Piece puzzle
 * @author TungLT
 * @constant tungluong2809@gmail.com
 */

import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { pieceResetPieces } from '../configurations';
import { getRecentPieces } from '../configurations/selectors';
import Board from './Board';
import Piece from './Piece';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        color: Colors.dark,
        backgroundColor: 'yellow',
    },
    board: {
        flex: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    pieces: {
        flex: 2,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tools: {
        flex: 2,
        backgroundColor: 'green',
    },
});

const Game = (props) => {
    const { name = 'bulbasaur' } = props;

    const recentPieces = useSelector(getRecentPieces);
    console.log('recentPieces', recentPieces);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pieceResetPieces());
    }, [dispatch]);

    return (
        <>
            <Text style={styles.header}>Pokemon Puzzle</Text>
            <View style={styles.board}>
                <Board name={name} />
            </View>
            <View style={styles.pieces}>
                {recentPieces.map((piece, index) => {
                    return <Piece key={index} config={piece} name={name} scale={0.55} />;
                })}
            </View>
            <View style={styles.tools}>
                <Text>Tools</Text>
            </View>
        </>
    );
};

export default Game;
