import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TwoImageColumn from './TwoImageColumn';

interface Props {
    ads: Array<{ id: number; image1: any; title1: string; image2: any; title2: string }>;
    onScroll: () => void;
}

const AdvertisementsColumn: React.FC<Props> = ({ ads, onScroll }) => {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}
        >
            {ads.map(ad => (
                <TwoImageColumn key={ad.id} image1={ad.image1} title1={ad.title1} image2={ad.image2} title2={ad.title2} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        backgroundColor: '#736868'
    },
    text: {
        fontSize: 18,
        lineHeight: 30,
    },
});

export default AdvertisementsColumn;