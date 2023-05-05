import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

interface Props {
  ad: any;
}

const SquareWithImageAndText: React.FC<Props> = ({ad }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
      <View style={styles.column}>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.imageContainer}>
            {Number.isInteger(ad.image) ? (
                <Image source={ad.image} style={styles.image} />
            ) : (
                <Image source={{ uri: ad.image }} style={styles.image} />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.title}>{ad.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Modal visible={isModalVisible} transparent={true}>
          <TouchableOpacity style={styles.modalContainer} onPress={toggleModal}>
            <View style={styles.closeContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
            </View>
            {Number.isInteger(ad.image) ? (
                <Image source={ad.image} style={styles.image} />
            ) : (
                <Image source={{ uri: ad.image }} style={styles.image} />
            )}
            <Text style={styles.modalTitle}>Tytuł: {ad?.title}</Text>
            <Text style={styles.modalCategory}>Kategoria: {ad?.category ?? ''}</Text>
            <Text style={styles.modalDescription}>Opis: {ad?.description ?? ''}</Text>
          </TouchableOpacity>
        </Modal>

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
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(218,218,218,0.8)',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalCategory: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
  },
  closeContainer: {
    position: 'absolute',
    justifyContent: "center",
    top: 10,
    right: 10,
    width: 35,
    height: 35,
    borderRadius: 90,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  closeButton: {
    fontSize: 20,
    color: 'rgb(255,255,255)',

    textAlign: 'center',
  },
});

export default SquareWithImageAndText;