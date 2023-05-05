import React from 'react';
import { View, StyleSheet } from 'react-native';
import SquareWithImageAndText from './SquareWithImageAndText';

interface Props {
  image1: any;
  title1: string;
  image2: any;
  title2: string;
}


const TwoImageColumn: React.FC<Props> = ({ image1, title1, image2, title2 }) => {
  return (
      <View style={styles.container}>
        <SquareWithImageAndText image={image1} title={title1} />
        <SquareWithImageAndText image={image2} title={title2} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 4,
    backgroundColor: '#736868'
  },

});

export default TwoImageColumn;