import { StyleSheet, ScrollView, View, Text, Animated } from 'react-native';
import Button from "../../components/Button";
import {Header} from "../../components/Header";
import Categories from '../../components/Categories';
import AdvertisementsColumn from '../../components/AdvertisementsColumn';
import { Feather } from '@expo/vector-icons';
import {useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { StatusBar } from 'react-native';

const ads = [
  {
    id: '1',
    title1: 'Nauczyciel',
    image1: require('../../assets/images/image1.jpg'),
    title2: 'Opona',
    image2: require('../../assets/images/image2.jpg'),
  },
  {
    id: '2',
    title1: 'Tynkarz',
    image1: require('../../assets/images/image3.jpg'),
    title2: 'Krowa',
    image2: require('../../assets/images/krowa.jpg'),
  },
  {
    id: '3',
    title1: 'Kapela',
    image1: require('../../assets/images/image5.jpg'),
    title2: 'Szalony fryzjer',
    image2: require('../../assets/images/image6.jpg'),
  },
  {
    id: '4',
    title1: 'Nauczyciel',
    image1: require('../../assets/images/image1.jpg'),
    title2: 'Mechanik',
    image2: require('../../assets/images/image2.jpg'),
  },
  {
    id: '5',
    title1: 'Tynkarz',
    image1: require('../../assets/images/image3.jpg'),
    title2: 'Title 4',
    image2: require('../../assets/images/image4.jpg'),
  },
  {
    id: '6',
    title1: 'Majster',
    image1: require('../../assets/images/image5.jpg'),
    title2: 'Fryzjer',
    image2: require('../../assets/images/image6.jpg'),
  },
  {
    id: '7',
    title1: 'Nauczyciel',
    image1: require('../../assets/images/image1.jpg'),
    title2: 'Mechanik',
    image2: require('../../assets/images/image2.jpg'),
  },
  {
    id: '8',
    title1: 'Tynkarz',
    image1: require('../../assets/images/image3.jpg'),
    title2: 'Mlecarz',
    image2: require('../../assets/images/image4.jpg'),
  },
  {
    id: '9',
    title1: 'Artysta',
    image1: require('../../assets/images/image5.jpg'),
    title2: 'Sprzedam ',
    image2: require('../../assets/images/image6.jpg'),
  },
];

export default function TabOneScreen() {
  const [elementVisible, setElementVisible] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const changeCategoryVisibility = _.debounce(() => {
    setElementVisible(!elementVisible);
  }, 100);

  const handleAdvertisementsColumnScroll = () => {
    setElementVisible(false);
  };

  const setScrollViewHeight = (visible: boolean) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.setNativeProps({
        style: { height: visible ? 150 : 0 }
      });
    }
  };

  useEffect(() => {
    setScrollViewHeight(elementVisible);
  }, [elementVisible]);

  return (
      <>

        <Header />
        <View style={styles.header}>
          <Text style={styles.headerText}>Kategorie</Text>
          <Button
              onPress={() => changeCategoryVisibility()}
              text={elementVisible ? 'Schowaj' : 'Pokaz'}
              icon={<Feather name="chevron-down" size={24} color="black" />}
          />
        </View>
        <View ref={scrollViewRef} style={styles.scrollViewContainer}>
          {elementVisible && (
              <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Categories />
              </ScrollView>
          )}
        </View>
        <View>
          <Text style={{ marginLeft: 3, marginBottom: 3, fontSize: 16, fontWeight: 'bold' }}>Wszystkie oferty</Text>
        </View>
        <AdvertisementsColumn ads={ads} onScroll={handleAdvertisementsColumnScroll} />
      </>
  );
}


const styles = StyleSheet.create({
  scrollViewContainer: {
    margin: 10,
    overflow: 'hidden', // Ukryj zawartość, która wychodzi poza granice kontenera
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    height: 150,
    backgroundColor: '#D9D9D9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    width: '100%',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },

});