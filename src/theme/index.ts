import { createTheme } from "@shopify/restyle";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { textVariants } from "./textVariants";

export type ThemeProps = typeof theme;

export const theme = createTheme({
  colors,
  spacing,
  textVariants,
});
