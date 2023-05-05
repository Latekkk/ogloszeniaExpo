import { Text, TextProps } from './Themed';
import SearchInput from "./SearchInput";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";

export function Header(props: TextProps) {
  return (
      <View style={styles.headerContainer}>
        <SearchInput style={''}/>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
  },
  searchInput: {
    width: '100%',
    justifyContent: 'flex-end',
    fontSize: 18,
  },
  iconContainer: {
    marginLeft: 10,
  },
});