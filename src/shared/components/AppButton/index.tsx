import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../../theme";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import AppText from "../AppText";
import { ComponentProps, PropsWithChildren } from "react";

interface IAppButton {
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
}

const BaseButton = createBox<ThemeProps, TouchableOpacityProps>(
  TouchableOpacity
);

export type IAppBaseButtonProps = ComponentProps<typeof BaseButton> & {};

const AppButton = ({ style, ...props }: IAppBaseButtonProps) => {
  return <BaseButton style={style} {...props} />;
};

export default AppButton;
