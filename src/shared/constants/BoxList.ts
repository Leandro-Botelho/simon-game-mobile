type BoxItem = "boxGreen" | "boxRed" | "boxYellow" | "boxBlue";

type IBoxItemConfig = {
  bgColor: BoxItem;
  style: object;
  color: "red" | "green" | "yellow" | "blue";
};

export const BOX_LIST: IBoxItemConfig[] = [
  {
    bgColor: "boxGreen",
    style: { borderTopLeftRadius: 125 },
    color: "green",
  },
  {
    bgColor: "boxRed",
    style: { borderTopRightRadius: 125 },
    color: "red",
  },
  {
    bgColor: "boxYellow",
    style: { borderBottomLeftRadius: 125 },
    color: "yellow",
  },
  {
    bgColor: "boxBlue",
    style: { borderBottomRightRadius: 125 },
    color: "blue",
  },
];
