import AppText from "@/shared/components/AppText";
import BoxGame from "@/shared/components/BoxGame";
import { ThemeProps } from "@/theme";
import { createBox, createText } from "@shopify/restyle";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

const Index = () => {
  return (
    <Box bg="primary" flex={1} justifyContent="center" gap="xl">
      <Box width={"100%"} justifyContent="center" alignItems="center" gap="xl">
        <Text variant="title">Simon Game</Text>

        <AppText href="/(screens)/Game" />
      </Box>

      <BoxGame />
    </Box>
  );
};

export default Index;
