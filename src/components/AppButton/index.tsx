import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import AppText from "../AppText";
import { PropsWithChildren } from "react";

interface IAppButton {
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
}

const BaseButton = createBox<ThemeProps, TouchableOpacityProps>(
  TouchableOpacity
);

const Button = ({
  onPress,
  style,
  children,
}: PropsWithChildren<IAppButton>) => {
  return (
    <BaseButton
      activeOpacity={0.65}
      bg="white"
      pb="s"
      borderRadius={8}
      onPress={onPress}
      style={style}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
