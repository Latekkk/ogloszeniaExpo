import { StyleSheet, ScrollView, View, Text, Animated } from 'react-native';
import Button from "../../components/Button";
import {Header} from "../../components/Header";
import Categories from '../../components/Categories';
import AdvertisementsColumn from '../../components/AdvertisementsColumn';
import { Feather } from '@expo/vector-icons';
import {useContext, useEffect, useRef, useState} from 'react';
import _ from 'lodash';
import {SelectedAdsContext} from "../SelectedAdsContext";


export default function TabOneScreen() {
  const [elementVisible, setElementVisible] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const { selectedAds, setSelectedAds } = useContext(SelectedAdsContext);

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
        <AdvertisementsColumn ads={selectedAds} onScroll={handleAdvertisementsColumnScroll} />
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