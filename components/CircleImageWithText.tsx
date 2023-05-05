import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleImage from './CircleImage';

const CircleImageWithText = ({source: source, text: text }) => {
    return (
        <View style={styles.container}>
            <CircleImage source={source} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: -6,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white', // zmiana koloru tekstu na biały
        textShadowColor: 'black', // dodanie cienia tekstu
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 2,
    },
});

export default CircleImageWithText;
