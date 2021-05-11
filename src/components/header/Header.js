import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BackButton from './BackButton';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        borderColor: Colors.dark,
        borderStyle: 'solid',
        borderWidth: 2,
    },
});

const Header = () => {
    return (
        <View style={styles.container}>
            <BackButton />
            <Text>sssHeader</Text>
        </View>
    );
};

export default Header;
