/**
 * Piece puzzle
 * @author TungLT
 * @constant tungluong2809@gmail.com
 */

import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { pieceResetPieces } from '../configurations';
import { getRecentPieces } from '../configurations/selectors';
import Board from './Board';
import Piece from './Piece';
import Header from './Header';

import background from '../assets/images/screens/game/background.png';
import piecesBackground from '../assets/images/screens/game/background_piece.png';
import headerBackground from '../assets/images/screens/game/background_header.png';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    header: {
        flex: 1.5,
        color: Colors.dark,
    },
    board: {
        flex: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    piecesContainer: {
        flex: 3,
    },
    pieces: {
        // backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tools: {
        flex: 2,
        // backgroundColor: 'green',
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
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={background}>
                <View style={styles.header}>
                    <ImageBackground style={styles.background} source={headerBackground}>
                        <Header />
                    </ImageBackground>
                </View>
                <View style={styles.board}>
                    <Board name={name} />
                </View>
                <View style={styles.piecesContainer}>
                    <ImageBackground style={styles.background} source={piecesBackground}>
                        <View style={styles.pieces}>
                            {recentPieces.map((piece, index) => {
                                return <Piece key={index} config={piece} name={name} scale={0.55} index={index} />;
                            })}
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.tools}>
                    <Text>Tools</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Game;
