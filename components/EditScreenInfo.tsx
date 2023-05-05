import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
          * Ten kod jest objęty licencją Creative Commons Attribution 4.0 International License.
        </Text>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>
            Creative Commons Attribution 4.0 (CC BY 4.0) to rodzaj licencji Creative Commons, która pozwala na swobodne wykorzystanie, modyfikowanie i dzielenie się utworami, pod warunkiem, że jest podana odpowiednia informacja o autorstwie. Oznacza to, że możesz edytować i modyfikować kod na własne potrzeby, pod warunkiem, że podasz źródło (autorstwo) pierwotnego kodu. Jest to licencja, która zapewnia duży zakres swobody w korzystaniu z utworów, zachowując jednocześnie pewne zasady etyki i szacunku dla twórców.</MonoText>
        </View>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://creativecommons.org/licenses/by/4.0/">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Więcej o licencji na:
          </Text>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            "https://creativecommons.org/licenses/by/4.0/"
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
