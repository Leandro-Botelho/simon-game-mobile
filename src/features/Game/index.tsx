import AppText from "@/shared/components/AppText";
import BoxItem from "@/shared/components/BoxGame/components/BoxItem";
import { BOX_LIST } from "@/shared/constants/BoxList";
import { useTimerInitGame } from "@/shared/hooks/useTimerInitGame";
import { BoxColorsProps } from "@/shared/types/boxColors.type";
import { generateRandomColor } from "@/shared/utils/generateRandomColor";
import { handleNavigate } from "@/shared/utils/handleNavigate";
import { ThemeProps } from "@/theme";
import { createBox } from "@shopify/restyle";
import { useCallback, useEffect, useState } from "react";
import { Audio } from "expo-av";

import soundGreen from "../../../assets/sounds/green.mp3";
import soundRed from "../../../assets/sounds/red.mp3";
import soundYellow from "../../../assets/sounds/yellow.mp3";
import soundBlue from "../../../assets/sounds/blue.mp3";
import { playSound } from "@/shared/utils/playSound";
import { router, useFocusEffect } from "expo-router";

const Box = createBox<ThemeProps>();

const soundMap = {
  green: soundGreen,
  red: soundRed,
  yellow: soundYellow,
  blue: soundBlue,
};

export const Game = () => {
  const { isGameStarted, timer } = useTimerInitGame();

  const [sequency, setSequency] = useState<BoxColorsProps[]>([]);
  const [playerSequency, setPlayerSequency] = useState<BoxColorsProps[]>([]);
  const [activeColor, setActiveColor] = useState<BoxColorsProps | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rounds, setRounds] = useState(1);

  useFocusEffect(
    useCallback(() => {
      setSequency([]);
      setPlayerSequency([]);
      setActiveColor(null);
      setIsPlaying(false);
      setRounds(1);
    }, [])
  );

  useEffect(() => {
    if (isGameStarted) startGame();
  }, [isGameStarted]);

  useEffect(() => {
    if (sequency.length > 0) playSequency(sequency);
  }, [sequency]);

  const startGame = () => {
    setSequency([]);
    setPlayerSequency([]);
    addColorToSequency();
  };

  const playSequency = async (sequencyToPlay: BoxColorsProps[]) => {
    setIsPlaying(true);
    for (const color of sequencyToPlay) {
      setActiveColor(null);

      await new Promise((resolve) => setTimeout(resolve, 200));

      setActiveColor(color);
      playSound(soundMap[color]);
      await new Promise((resolve) => setTimeout(resolve, 500));

      setActiveColor(null);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    setIsPlaying(false);
  };

  const addColorToSequency = () => {
    const randomColor = generateRandomColor();
    setSequency((prev) => [...prev, randomColor]);
    setPlayerSequency([]);
  };

  const handlePlayerSequency = (color: BoxColorsProps) => {
    const newPlayerSequency = [...playerSequency, color];
    setPlayerSequency(newPlayerSequency);

    const currentIndex = newPlayerSequency.length - 1;
    if (newPlayerSequency[currentIndex] !== sequency[currentIndex]) {
      console.log("Você perdeu!");
      router.push({
        pathname: "/(screens)/FinishGame",
        params: {
          rounds,
        },
      });

      return;
    }

    if (newPlayerSequency.length === sequency.length) {
      setTimeout(() => {
        addColorToSequency();
        setRounds((prev) => prev + 1);
      }, 1000);
    }
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="primary">
      {isGameStarted ? (
        <>
          <AppText fontSize={58}>Rodada: {rounds}</AppText>

          <Box
            gap="m"
            flexDirection="row"
            width={"100%"}
            flexWrap="wrap"
            p="xl"
            justifyContent="center"
          >
            {BOX_LIST.map(({ bgColor, style, color }) => (
              <BoxItem
                key={bgColor}
                bgColor={bgColor}
                opacity={0.5}
                style={{
                  ...style,
                  opacity: activeColor === color ? 0.4 : 1,
                  pointerEvents: isPlaying ? "none" : "auto",
                }}
                onPress={() => {
                  playSound(soundMap[color]);
                  if (!isPlaying) handlePlayerSequency(color);
                }}
              />
            ))}
          </Box>
        </>
      ) : (
        <AppText fontSize={72}>{timer === 0 ? "Começar" : timer}</AppText>
      )}
    </Box>
  );
};
