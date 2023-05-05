import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchInput = ({style: style}) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder="Wyszukaj"
                placeholderTextColor="gray"
            />
            <AntDesign name="search1" size={24} color="gray" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        margin: 10,
        padding: 5,
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
});

export default SearchInput;