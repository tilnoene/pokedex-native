import React from 'react';
import { StyleSheet, View, FlatList, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
  Barlow_300Light_Italic,
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from '@expo-google-fonts/barlow';

import Feed from './src/pages/Feed';

//import { themes } from './styles/themes';

export default function App() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Barlow_300Light_Italic,
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });

  if (!loaded) return null;

  /*const deviceTheme = useColorScheme(); // dark, light, null
  const theme = themes[deviceTheme] || themes.light;*/

  return (
    <View style={styles.container}>
      <StatusBar style='dark' backgroundColor='#fff' translucent={false} />
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
