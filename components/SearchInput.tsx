import React, {useContext, useState} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {SelectedAdsContext} from "../app/SelectedAdsContext";
import {AdsContext} from "../app/AdsContext";

const SearchInput = ({style: style}) => {


    const {  setSelectedAds} = useContext(SelectedAdsContext);
    const { ads} = useContext(AdsContext);

    const filterAdsByTitle = (text) => {
        if (text.length === 0) {
            setSelectedAds(ads);
        }
        else {
            const filteredAds = ads.filter(ad => ad.title.toLowerCase().includes(text.toLowerCase()));
            setSelectedAds(filteredAds);
        }
    }



    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder="Wyszukaj po nazwie"
                placeholderTextColor="gray"
                onChangeText={(e) => filterAdsByTitle(e)}
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