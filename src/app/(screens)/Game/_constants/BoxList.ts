type BoxItem = "boxGreen" | "boxRed" | "boxYellow" | "boxBlue";

type IBoxItemConfig = {
  bgColor: BoxItem;
  style: object;
};

export const BOX_LIST: IBoxItemConfig[] = [
  {
    bgColor: "boxGreen",
    style: { borderTopLeftRadius: 125 },
  },
  {
    bgColor: "boxRed",
    style: { borderTopRightRadius: 125 },
  },
  {
    bgColor: "boxYellow",
    style: { borderBottomLeftRadius: 125 },
  },
  {
    bgColor: "boxBlue",
    style: { borderBottomRightRadius: 125 },
  },
];
