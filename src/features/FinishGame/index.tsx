import AppButton from "@/shared/components/AppButton";
import AppText from "@/shared/components/AppText";
import { ThemeProps } from "@/theme";
import { createBox } from "@shopify/restyle";
import { Link, router, useLocalSearchParams } from "expo-router";

const Box = createBox<ThemeProps>();

export const FinishGame = () => {
  const { rounds } = useLocalSearchParams();

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
        <AppText variant="title">Você perdeu!</AppText>
        <AppText variant="subtitle">Rodadas: {rounds}</AppText>
      </Box>

      <Box flexDirection="column" gap="l">
        <Link href="/(screens)/Game" asChild>
          <AppButton
            bg="white"
            width={300}
            padding="s"
            borderRadius={10}
            justifyContent="center"
          >
            <AppText textAlign="center" color="primary" fontSize={42}>
              JOGAR NOVAMENTE
            </AppText>
          </AppButton>
        </Link>

        <Link href="/" asChild>
          <AppButton
            bg="boxBlue"
            width={300}
            padding="s"
            borderRadius={10}
            justifyContent="center"
          >
            <AppText textAlign="center" color="white" fontSize={42}>
              INÍCIO
            </AppText>
          </AppButton>
        </Link>
      </Box>
    </Box>
  );
};
