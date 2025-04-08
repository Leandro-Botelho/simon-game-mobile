import { ThemeProps } from "@/theme";
import { createBox, createText } from "@shopify/restyle";
import { router } from "expo-router";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

const Loser = () => {
  const handleNavigate = () => router.push("/");

  return (
    <Box
      bg="primary"
      flex={1}
      justifyContent="center"
      alignItems="center"
      p="xl"
      gap="xxl"
    >
      <Box gap="s" alignItems="center">
        <Text variant="title">Você perdeu!</Text>
        <Text variant="subtitle">Rodadas: 10</Text>
      </Box>

      {/* <Button
        onPress={handleNavigate}
        style={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <AppText>Jogar Novamente</AppText>
      </Button> */}
    </Box>
  );
};

export default Loser;
