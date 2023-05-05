import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const CircleImage = ({source: source}) => {
  return (
      <View style={styles.container}>
        <Image source={source} style={styles.image} resizeMode="cover" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 125,
    height: 125,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 'auto',
    paddingVertical: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default CircleImage;