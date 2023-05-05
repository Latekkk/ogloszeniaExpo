import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

interface Props {
    onPress: () => void;
    text: string;
    icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({ onPress, text, icon }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.buttonText}>{text}</Text>
                <View style={styles.spacer} />
                {icon && <View style={styles.buttonIcon}>{icon}</View>}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 120,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    buttonIcon: {
        marginLeft: 10,
    },
    spacer: {
        flex: 1,
    },
});

export default Button;