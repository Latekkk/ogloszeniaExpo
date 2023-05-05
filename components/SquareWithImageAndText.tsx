import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface Props {
  image: any;
  title: string;
}

const SquareWithImageAndText: React.FC<Props> = ({ image, title }) => {
  return (
      <View style={styles.column}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  column: {
    alignItems: 'center',
    border: '1px solid #000000'
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});

export default SquareWithImageAndText;