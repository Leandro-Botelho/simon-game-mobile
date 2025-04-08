import { useFonts, VT323_400Regular } from "@expo-google-fonts/vt323";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export const useInitialConfigs = () => {
  const [fontsLoaded] = useFonts({
    VT323_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
};
