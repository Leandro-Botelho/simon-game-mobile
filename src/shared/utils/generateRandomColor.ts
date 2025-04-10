import { GAME_COLORS } from "../constants/gameColors";
import { BoxColorsProps } from "../types/boxColors.type";

export const generateRandomColor = (): BoxColorsProps => {
  const randomIndex = Math.floor(Math.random() * GAME_COLORS.length);
  return GAME_COLORS[randomIndex];
};
