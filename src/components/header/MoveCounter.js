import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import ImageConfig from '../../configurations/ImageConfig';
import { getMoveCount } from '../../configurations/selectors/board';

const width = ImageConfig.getSizeOnWidth(0.2);

const styles = StyleSheet.create({
    moveCounter: {
        width,
        height: width,
        position: 'absolute',
        left: (ImageConfig.windowWidth - width) / 2,
        // alignSelf: 'center',
        bottom: -ImageConfig.getSizeOnHeight(0.02),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '800',
    },
});

const MoveCounter = () => {
    const moveCount = useSelector(getMoveCount);
    return (
        <ImageBackground style={styles.moveCounter} source={require('../../assets/images/screens/game/move_count.png')}>
            <Text style={styles.text}>{moveCount}</Text>
        </ImageBackground>
    );
};

export default MoveCounter;
