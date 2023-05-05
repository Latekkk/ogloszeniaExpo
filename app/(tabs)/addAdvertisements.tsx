import React, {useContext, useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView, Image, StatusBar} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import {FullScreenContext} from "../FullSreenContext";

export default function AddAdvertisements() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const { fullScreen, setFullScreen } = useContext(FullScreenContext);

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      // handle permissions not granted
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = async () => {
    const advertisement = {
      title,
      category,
      description,
      image,
    };

    try {
      await AsyncStorage.setItem('advertisement', JSON.stringify(advertisement));
      // powiadomienie użytkownika o sukcesie dodania ogłoszenia
    } catch (error) {
      // obsługa błędu
    }
  };


  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView>
          <View style={styles.form}>
            {
                fullScreen && (
                    <Text >Dodawanie ogłoszeń</Text>
                )
            }
            <Input label="Tytuł" value={title} onChangeText={setTitle} />
            <Input label="Kategoria" value={category} onChangeText={setCategory} />
            <Input label="Opis" value={description} onChangeText={setDescription} multiline />
            <Button title="Dodaj zdjęcie" onPress={handleImagePicker} />
            {image && (
                <View style={styles.imageContainer}>
                  <Image source={{ uri: image }} style={styles.image} />
                </View>
            )}
            <Button title="Dodaj ogłoszenie" onPress={handleSubmit} />
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
});

