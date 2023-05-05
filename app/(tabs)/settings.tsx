import React, {useContext} from 'react';
import {View, StyleSheet, StatusBar, Pressable, useColorScheme} from 'react-native';

import { Switch, Text } from 'react-native-elements';
import { DarkModeActionsContext } from '../DarkModeActionsContext';
import {FullScreenContext} from "../FullSreenContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../constants/Colors";
import {Link} from "expo-router";
const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  const handleNotificationsSwitch = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const { darkMode, setDarkMode } = useContext(DarkModeActionsContext);

  const { fullScreen, setFullScreen } = useContext(FullScreenContext);

  const colorScheme = useColorScheme();
  return (
      <View style={styles.container}>
        {
            fullScreen && (
                <Text style={styles.header}>Ustawienia</Text>
            )
        }
        <View style={styles.settingsItem}>
          <Text style={styles.settingsLabel}>Powiadomienia</Text>
          <Switch
              value={notificationsEnabled}
              onValueChange={handleNotificationsSwitch}
              color="#6200EE"
          />
        </View>
        <View style={styles.settingsItem}>
          <Text style={styles.settingsLabel}>Tryb ciemny</Text>
          <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              color="#6200EE"
          />
        </View>

        <View style={styles.settingsItem}>
          <Text style={styles.settingsLabel}>Pełny ekran</Text>
          <Switch
              value={fullScreen}
              onValueChange={setFullScreen}
              color="#6200EE"
          />
        </View>

        <View style={styles.settingsItem}>
          <Text style={styles.settingsLabel}>Pokaż licencje</Text>
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
        </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingsLabel: {
    fontSize: 16,
  },
});

export default SettingsScreen;