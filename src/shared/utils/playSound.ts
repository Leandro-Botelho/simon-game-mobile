import { Audio } from "expo-av";

export const playSound = async (soundToPlay: any) => {
  const { sound } = await Audio.Sound.createAsync(soundToPlay);
  await sound.playAsync();

  sound.setOnPlaybackStatusUpdate((status) => {
    if (status.isLoaded && status.didJustFinish) {
      sound.unloadAsync();
    }
  });
};
