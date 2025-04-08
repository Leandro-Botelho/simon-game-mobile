import BoxItem from "@/shared/components/BoxGame/components/BoxItem";
import { ThemeProps } from "@/theme";
import { createBox, createText } from "@shopify/restyle";
import { router } from "expo-router";
import { BOX_LIST } from "./_constants/BoxList";

const Box = createBox<ThemeProps>();

const Play = () => {
  const handleNavigate = () => {
    router.push("/(screens)/Loser");
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="primary">
      <Box
        gap="m"
        flexDirection="row"
        width={"100%"}
        flexWrap="wrap"
        p="xl"
        justifyContent="center"
      >
        {BOX_LIST.map(({ bgColor, style }) => (
          <BoxItem bgColor={bgColor} opacity={0.5} style={style} />
        ))}
      </Box>
    </Box>
  );
};

export default Play;
