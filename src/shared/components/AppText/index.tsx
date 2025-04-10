import { createBox, createText, TextProps } from "@shopify/restyle";
import { ThemeProps } from "../../../theme";
import { PropsWithChildren } from "react";
import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";
import { Link, LinkProps } from "expo-router";

const Text = createText<ThemeProps>();

type ITextProps = PropsWithChildren<
  TextProps<ThemeProps> & { style?: StyleProp<TextStyle> }
>;

const AppText = ({ style, children, ...rest }: ITextProps) => {
  return (
    <Text style={style} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
