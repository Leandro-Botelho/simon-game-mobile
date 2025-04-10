import AppButton from "@/shared/components/AppButton";
import AppText from "@/shared/components/AppText";
import BoxGame from "@/shared/components/BoxGame";
import { ThemeProps } from "@/theme";
import { createBox, createText } from "@shopify/restyle";
import { Link } from "expo-router";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export const Home = () => {
  return (
    <Box bg="primary" flex={1} justifyContent="center" gap="xl">
      <Box width={"100%"} alignItems="center" gap="xl">
        <Text textAlign="center" variant="title">
          Simon Game
        </Text>

        <Link href="/(screens)/Game" asChild>
          <AppButton
            bg="white"
            width={200}
            padding="s"
            borderRadius={10}
            justifyContent="center"
          >
            <AppText textAlign="center" color="primary" fontSize={42}>
              JOGAR
            </AppText>
          </AppButton>
        </Link>
      </Box>

      <BoxGame />
    </Box>
  );
};
