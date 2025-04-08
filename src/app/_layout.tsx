import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { theme } from "../theme";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts, VT323_400Regular } from "@expo-google-fonts/vt323";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    VT323_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(screens)/Loser" />
        <Stack.Screen name="(screens)/Game" />
      </Stack>
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </ThemeProvider>
  );
}
