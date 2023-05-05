import React, { useContext } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CircleImage from './CircleImage';
import {SelectedAdsContext} from "../app/SelectedAdsContext";
import {AdsContext} from "../app/AdsContext";

const CircleImageWithText = ({source: source, text: text}) => {

    const {  setSelectedAds} = useContext(SelectedAdsContext);
    const { ads} = useContext(AdsContext);

    const filterAdsByCategory = (category) => {
        console.log(category)
        if (category !== 'Ogloszenia') {
            const filteredAds = ads.filter(ad => ad.category === category);
            setSelectedAds(filteredAds);
        } else {
            setSelectedAds(ads);
        }

    }

    return (
        <View >
            <TouchableOpacity onPress={() => {filterAdsByCategory(text)}} style={styles.container}>
                <CircleImage source={source}/>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
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
        textShadowOffset: {width: 2, height: 1},
        textShadowRadius: 2,
    },
});

export default CircleImageWithText;
