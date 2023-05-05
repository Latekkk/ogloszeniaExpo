import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Pressable, StatusBar, useColorScheme} from 'react-native';

import Colors from '../../constants/Colors';
import React, {useState} from "react";
import {FullScreenContext} from "../FullSreenContext";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    const [fullScreen, setFullScreen] = useState(false);
    return (
        <>
            <FullScreenContext.Provider value={{fullScreen, setFullScreen}}>
                <StatusBar hidden={fullScreen}/>

                <Tabs
                    screenOptions={{
                        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                    }}>
                    <Tabs.Screen
                        name="index"
                        options={{
                            headerShown: !fullScreen,
                            title: 'Aplikacja Adama 30689',
                            tabBarIcon: ({color}) => <TabBarIcon name="shopping-bag" color={color}/>,
                            headerRight: () => (
                                <Link href="/licencja" asChild>
                                    <Pressable
                                    >
                                        {({pressed}) => (
                                            <FontAwesome
                                                name="info-circle"
                                                size={25}
                                                color={Colors[colorScheme ?? 'light'].text}
                                                style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                                            />
                                        )}
                                    </Pressable>
                                </Link>
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="addAdvertisements"
                        options={{
                            headerShown: !fullScreen,
                            title: 'Dodawania ogłoszenia',
                            tabBarIcon: ({color}) => <TabBarIcon name="plus" color={color}/>,
                        }}
                    />
                    <Tabs.Screen
                        name="settings"
                        options={{
                            headerShown: !fullScreen,
                            title: 'Ustawienia',
                            tabBarIcon: ({color}) => <TabBarIcon name="gear" color={color}/>,
                        }}
                    />
                    <Tabs.Screen
                        name="aboutMe"
                        options={{
                            headerShown: !fullScreen,
                            title: 'O mnie',
                            tabBarIcon: ({color}) => <TabBarIcon name="user-o" color={color}/>,
                        }}
                    />
                </Tabs>
            </FullScreenContext.Provider>
        </>

    );
}
