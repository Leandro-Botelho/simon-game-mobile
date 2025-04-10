import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import AppContainer from "@/core/AppContainer";

export default function RootLayout() {
  return (
    <AppContainer>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(screens)/FinishGame" />
        <Stack.Screen name="(screens)/Game" />
      </Stack>
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </AppContainer>
  );
}
