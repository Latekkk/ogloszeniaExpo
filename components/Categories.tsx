import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from './Themed';
import CircleImageWithText from './CircleImageWithText';

export default function Categories() {
  const photo = require('../assets/images/logo.png');
  const categories = [
    { source: photo, text: 'Ogloszenia' },
    { source: 'https://i.iplsc.com/-/0007E9WWI9S7NNCP-C429-F4.jpg', text: 'Samochody' },
    { source: 'https://img.shmbk.pl/rimgsph/2761_480cbb78-e015-45a8-9a0d-6133b062d90a_max_1280_768_zdjecie-domy-styl-tradycyjny.jpg', text: 'Domy' },
    { source: 'https://marketingibiznes.pl/wp-content/uploads/2019/03/wokr1350-min.png', text: 'Praca' },
    { source: 'https://www.tranzystor.pl/wp-content/uploads/IMG_20190124_150746-e1586892779796.jpg', text: 'Elektronika' },
    { source: 'https://www.debki.pl/img/layout/debki/kategorie/noclegi-debki.jpg', text: 'Noclegi' },
    { source: 'https://sercunaratunek.pl/wp-content/uploads/2020/02/warzywa.jpg', text: 'Warzywa' },
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