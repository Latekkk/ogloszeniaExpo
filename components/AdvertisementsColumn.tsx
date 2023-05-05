import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TwoImageColumn from './TwoImageColumn';

interface Props {
    ads: Array<{image: any; title: string; }>;
    onScroll: () => void;
}

const AdvertisementsColumn: React.FC<Props> = ({ads, onScroll}) => {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}
        >
            {ads.map((ad, i) => {
                if (i % 2 === 0) {
                    return (
                        <TwoImageColumn
                            key={i}
                            ad1={ad}
                            ad2={ads[i+1]}
                        />
                    );
                }
            })}
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