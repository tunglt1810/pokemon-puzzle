import React, { useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backButton: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 35,
    },
});

const BackButton = () => {
    const onClick = useCallback(() => {
        console.log('Back button click');
    }, []);

    return (
        <Image
            source={require('../../assets/images/screens/game/btn_back.png')}
            style={styles.backButton}
            onClick={onClick}
        />
    );
};

export default BackButton;
