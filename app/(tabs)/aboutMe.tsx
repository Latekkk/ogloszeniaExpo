import React, {useContext, useRef } from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {FullScreenContext} from "../FullSreenContext";



export default function AboutMe() {

    const {fullScreen} = useContext(FullScreenContext);

    const photo = require('../../assets/images/ja.jpg');


    return (
        <View style={styles.container}>
            {
                fullScreen && (
                    <Text style={styles.header}>O mnie</Text>
                )
            }
            <Image source={photo} style={styles.image}/>
            <Text style={styles.name}>Adam Łatkowski</Text>
            <ScrollView>
                <Text style={styles.description}>FULL STACK DEVELOPER</Text>
                <Text style={styles.description}>w mirit</Text>
                <Text style={styles.text}>
                    Cześć! Jestem Adam Łatkowski i jestem programistą z wieloletnim doświadczeniem w tworzeniu aplikacji
                    internetowych i mobilnych. Uwielbiam pisać aplikacje w różnych językach programowania, ale moimi
                    ulubionymi są Laravel, React, Vue, Inertia oraz React Native.

                    Laravel to framework do tworzenia aplikacji w języku PHP, który uważam za bardzo wygodny i
                    efektywny. Dzięki niemu mogę tworzyć szybko i łatwo aplikacje webowe z pełnym systemem
                    uwierzytelniania, obsługą baz danych oraz integracją z innymi narzędziami.

                    React to biblioteka JavaScript, która umożliwia mi tworzenie dynamicznych i interaktywnych
                    interfejsów użytkownika. Dzięki niemu mogę w prosty sposób budować aplikacje jednostronicowe (SPA),
                    które działają szybko i responsywnie.

                    Vue to kolejna biblioteka JavaScript, która umożliwia mi tworzenie elastycznych i skalowalnych
                    interfejsów użytkownika. Używam go szczególnie wtedy, gdy chcę zbudować aplikacje, które wymagają
                    szybkiej i płynnej interakcji użytkownika z interfejsem.

                    Inertia to biblioteka, która pozwala mi tworzyć aplikacje webowe z wykorzystaniem React lub Vue, ale
                    bez konieczności pisania specjalnego kodu na serwerze. Dzięki temu mogę skupić się na pisaniu kodu
                    front-endowego, a całą logikę biznesową przekazać do kontrolerów w Laravelu.

                    React Native to natywny framework dla tworzenia aplikacji mobilnych dla platformy iOS i Android.
                    Uwielbiam go używać, ponieważ dzięki niemu mogę tworzyć aplikacje mobilne z wykorzystaniem
                    JavaScript, co pozwala mi uniknąć konieczności nauki dwóch oddzielnych języków programowania.

                    W wolnym czasie lubię eksperymentować z nowymi technologiami i narzędziami, a także podróżować i
                    poznawać nowe kultury.</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center"
    },
    about: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 30,
        padding: 15,
    },
});
