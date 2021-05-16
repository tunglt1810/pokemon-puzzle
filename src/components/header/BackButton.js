import React, { useCallback } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backButton: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 35,
    },
});

const BackButton = () => {
    const onPress = useCallback(() => {
        console.log('Back button click');
    }, []);

    return (
        <Pressable onPress={onPress}>
            <Image source={require('../../assets/images/screens/game/btn_back.png')} style={styles.backButton} />
        </Pressable>
    );
};

export default BackButton;
