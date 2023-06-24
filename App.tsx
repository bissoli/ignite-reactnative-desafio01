import Home from './src/screens/Home';
import { StatusBar, Text } from 'react-native';
import { theme } from "./theme";

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { NativeBaseProvider, Box } from "native-base";


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <></>;
  }


  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor="#FFF"
        translucent={true}
      />
      <Home />
    </NativeBaseProvider>

  );
}
