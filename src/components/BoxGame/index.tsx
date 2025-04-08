import { createBox } from "@shopify/restyle";
import BoxItem from "./components/BoxItem";
import { ThemeProps } from "../../theme";

const Box = createBox<ThemeProps>();

const BoxGame = () => {
  return (
    <Box
      gap="m"
      flexDirection="row"
      width={"100%"}
      flexWrap="wrap"
      p="xl"
      justifyContent="center"
    >
      <BoxItem
        bgColor="boxGreen"
        opacity={1}
        style={{ borderTopLeftRadius: 125 }}
      />
      <BoxItem
        bgColor="boxRed"
        opacity={1}
        style={{ borderTopRightRadius: 125 }}
      />
      <BoxItem
        bgColor="boxYellow"
        opacity={1}
        style={{ borderBottomLeftRadius: 125 }}
      />
      <BoxItem
        bgColor="boxBlue"
        opacity={1}
        style={{ borderBottomRightRadius: 125 }}
      />
    </Box>
  );
};

export default BoxGame;
