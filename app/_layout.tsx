import {
  Oxanium_400Regular,
  Oxanium_700Bold,
  useFonts,
} from "@expo-google-fonts/oxanium";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/state/store";

const RootLayout = () => {
  const [loaded, error] = useFonts({
    Oxanium_400Regular,
    Oxanium_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </Provider>
  );
};

export default RootLayout;
