import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from './Themed';
import CircleImageWithText from './CircleImageWithText';

export default function Categories() {
  const photo = require('../assets/images/logo.png');
  const categories = [
    { source: photo, text: 'Ogloszenia' },
    { source: require('../assets/images/categories/Samochody.png'), text: 'Samochody' },
    { source: require('../assets/images/categories/Domy.png'), text: 'Domy' },
    { source: require('../assets/images/categories/Praca.png'), text: 'Praca' },
    { source: require('../assets/images/categories/Elektronika.png'), text: 'Elektronika' },
    { source: require('../assets/images/categories/Noclegi.png'), text: 'Noclegi' },
    { source: require('../assets/images/categories/Warzywa.png'), text: 'Warzywa' },
  ];

  return (
      <ScrollView horizontal>
        <View style={styles.container}>
          {categories.map((category, index) => (
              <CircleImageWithText key={index} source={category.source} text={category.text} />
          ))}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 'auto',
    borderRadius: 63,
    overflow: 'hidden', // dodane przesuwanie
    justifyContent: 'flex-start',
    gap: 12,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'transition',
  },
});