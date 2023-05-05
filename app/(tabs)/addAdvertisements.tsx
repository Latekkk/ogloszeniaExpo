import React, {useContext, useState} from 'react';
import {Image, KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, CheckBox, Dialog, Input, Text} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import {FullScreenContext} from "../FullSreenContext";
import {AdsContext} from "../AdsContext";
import {useNavigation} from 'expo-router';

export default function AddAdvertisements() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const {fullScreen, setFullScreen} = useContext(FullScreenContext);
    const {ads, setAds} = useContext(AdsContext);
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [checked, setChecked] = useState(1);
    const [visibleCategory, setVisibleCategory] = useState(false);

    const categories = [
        {label: 'Samochody', value: 'Samochody'},
        {label: 'Domy', value: 'Domy'},
        {label: 'Praca', value: 'Praca'},
        {label: 'Elektronika', value: 'Elektronika'},
        {label: 'Noclegi', value: 'Noclegi'},
        {label: 'Warzywa', value: 'Warzywa'},
    ];


    const handleImagePicker = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            // handle permissions not granted
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({mediaTypes: ImagePicker.MediaTypeOptions.Images});
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleSubmit = async () => {

        if (title === '' ||
            category === '' ||
            description === '' ||
            image === ''
        ) {
            alert('Zaznacz wszystkie opcje')
        } else {

            const advertisement = {
                title,
                category,
                description,
                image,
            };


            setAds((prevAds) => prevAds.concat(advertisement));

            navigation.navigate('index'); // nawiguj na inny ekran
        }
    };


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView>
                <View style={styles.form}>
                    {
                        fullScreen && (
                            <Text>Dodawanie ogłoszeń</Text>
                        )
                    }
                    <Input label="Tytuł" value={title} onChangeText={setTitle}/>

                    <Input label="Kategoria" value={category} disabled={true}/>
                    <Button
                        title="Wybierz kategorię"
                        onPress={() => setVisibleCategory(!visibleCategory)}
                        buttonStyle={styles.button}
                    />
                    <Dialog
                        isVisible={visibleCategory}
                        onBackdropPress={() => setVisibleCategory(!visibleCategory)}
                    >
                        <Dialog.Title title="Select Preference"/>
                        {categories.map((l, i) => (
                            <CheckBox
                                key={i}
                                title={l.label}
                                containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                checked={checked === i + 1}
                                onPress={() => setChecked(i + 1)}
                            />
                        ))}

                        <Dialog.Actions>
                            <Dialog.Button
                                title="Potwierdź"
                                onPress={() => {
                                    setCategory(categories[checked - 1].value)
                                    setVisibleCategory(!visibleCategory);
                                }}
                            />
                            <Dialog.Button title="Anuluj" onPress={() => setVisibleCategory(!visibleCategory)}/>
                        </Dialog.Actions>
                    </Dialog>
                    <Input label="Opis" value={description} onChangeText={setDescription} multiline/>
                    <Button title="Dodaj zdjęcie" onPress={handleImagePicker}/>
                    {image && (
                        <View style={styles.imageContainer}>
                            <Image source={{uri: image}} style={styles.image}/>
                        </View>
                    )}
                    <Button title="Dodaj ogłoszenie" onPress={handleSubmit}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        margin: 20,
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    button: {
        borderRadius: 6,
        margin: 20,
    },
});

