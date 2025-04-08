import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { PropsWithChildren } from "react";
import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";
import { Link, LinkProps } from "expo-router";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

interface ITextProps {
  style?: StyleProp<TextStyle>;
  href: string;
}

const AppText = ({ style }: PropsWithChildren<ITextProps>) => {
  return (
    <Box backgroundColor="white" p="s" borderRadius={10} width={"50%"}>
      <Link href="/(screens)/Game">
        <Text textAlign="center" style={style} variant="button" color="primary">
          Jogar
        </Text>
      </Link>
    </Box>
  );
};

export default AppText;
