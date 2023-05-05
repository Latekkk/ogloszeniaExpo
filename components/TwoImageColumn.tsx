import React from 'react';
import { View, StyleSheet } from 'react-native';
import SquareWithImageAndText from './SquareWithImageAndText';

interface Props {
  ad1: any;
  ad2: any;
}


const TwoImageColumn: React.FC<Props> = ({ ad1, ad2 }) => {
  return (
      <View style={styles.container}>
        <SquareWithImageAndText ad={ad1}  />
        {
          ad2 && <SquareWithImageAndText ad={ad2} />
        }

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