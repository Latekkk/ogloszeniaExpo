import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {SplashScreen, Stack} from 'expo-router';
import {useEffect, useState} from 'react';
import {DarkModeActionsContext} from './DarkModeActionsContext';
import {AdsContext} from './AdsContext';
import {SelectedAdsContext} from './SelectedAdsContext';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    return (
        <>
            {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
            {!loaded && <SplashScreen/>}
            {loaded && <RootLayoutNav/>}
        </>
    );
}

function RootLayoutNav() {
    const [darkMode, setDarkMode] = useState(false);
    const [ads, setAds] = useState<[]>([]);
    const [selectedAds, setSelectedAds] = useState<[]>(ads);
    const newData = [
        {
            title: 'Nauczyciel',
            description: 'Oferta pracy dla nauczyciela',
            category: 'Domy',
            image: require('../assets/images/image1.jpg'),
        },
        {
            title: 'Opona',
            description: 'Sprzedam oponę zimową w dobrym stanie',
            category: 'Samochody',
            image: require('../assets/images/image2.jpg'),
        },
        {
            title: 'Tynkarz',
            description: 'Wykonuję usługi tynkarskie na terenie całego miasta',
            category: 'Domy',
            image: require('../assets/images/image3.jpg'),
        },
        {
            title: 'Krowa',
            description: 'Sprzedam młodą krowę rasy holstein',
            category: 'Warzywa',
            image: require('../assets/images/krowa.jpg'),
        },
        {
            title: 'Kapela',
            description: 'Zespół muzyczny na wesela i imprezy okolicznościowe',
            category: 'Elektronika',
            image: require('../assets/images/image5.jpg'),
        },
        {
            title: 'Szalony fryzjer',
            description: 'Zapraszamy do skorzystania z naszych usług fryzjerskich',
            category: 'Domy',
            image: require('../assets/images/image6.jpg'),
        },
        {
            title: 'Nauczyciel',
            description: 'Szukam pracy jako nauczyciel języka angielskiego',
            category: 'Domy',
            image: require('../assets/images/image1.jpg'),
        },
        {
            title: 'Mechanik',
            description: 'Serwis i naprawa samochodów wszystkich marek',
            category: 'Samochody',
            image: require('../assets/images/image2.jpg'),
        },
        {
            title: 'Tynkarz',
            description: 'Tynkowanie i malowanie ścian, sufity i elewacje',
            category: 'Domy',
            image: require('../assets/images/image3.jpg'),
        },
        {
            title: 'Farmer',
            description: 'Opis oferty numer 4',
            category: 'Noclegi',
            image: require('../assets/images/image4.jpg'),
        },
        {
            title: 'Majster',
            description: 'Wykonuję różnego rodzaju prace remontowe i budowlane',
            category: 'Domy',
            image: require('../assets/images/image5.jpg'),
        },
        {
            title: 'Fryzjer',
            description: 'Profesjonalne strzyżenie i koloryzacja włosów',
            category: 'Domy',
            image: require('../assets/images/image6.jpg'),
        },
        {
            title: 'Nauczyciel',
            description: 'Szukam pracy jako nauczyciel matematyki',
            category: 'Domy',
            image: require('../assets/images/image1.jpg'),
        },
        {
            title: 'Mechanik',
            description: 'Wymiana oleju i filtrów w samochodach osobowych',
            category: 'Samochody',
            image: require('../assets/images/image2.jpg'),
        },
    ];
    useEffect(() => {
        async function checkIfDataExists() {
            if (ads.length === 0) {
                setAds(newData);
            }
        }

        checkIfDataExists();
    }, []);

    useEffect(() => {
        setSelectedAds(ads)
    }, [ads])

    return (
        <SelectedAdsContext.Provider value={{selectedAds, setSelectedAds}}>
            <AdsContext.Provider value={{ads, setAds}}>
                <DarkModeActionsContext.Provider value={{darkMode, setDarkMode}}>
                    <ThemeProvider value={darkMode ? DarkTheme : DefaultTheme}>
                        <Stack>
                            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                            <Stack.Screen name="licencja" options={{presentation: 'modal'}}/>
                        </Stack>
                    </ThemeProvider>
                </DarkModeActionsContext.Provider>
            </AdsContext.Provider>
        </SelectedAdsContext.Provider>
    );
}
