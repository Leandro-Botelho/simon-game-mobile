import { createBox } from "@shopify/restyle";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { ThemeProps } from "../../../../theme";

interface ITouchBox {
  opacity: 1 | 0.5;
  bgColor: "boxGreen" | "boxRed" | "boxBlue" | "boxYellow";
  style: StyleProp<ViewStyle>;
}

const BaseTouch = createBox<ThemeProps, TouchableOpacityProps>(
  TouchableOpacity
);

const BoxItem = ({ bgColor, opacity, style }: ITouchBox) => {
  return (
    <BaseTouch
      activeOpacity={opacity}
      bg={bgColor}
      style={style}
      width={120}
      height={120}
    />
  );
};

export default BoxItem;
