import { ThemeProps } from "@/theme";
import { BoxProps } from "@shopify/restyle";
import { PropsWithChildren } from "react";
import AppBox from "../AppBox";

export type IBoxRowProps = PropsWithChildren<BoxProps<ThemeProps>>;

const AppBoxRow = ({ children, ...props }: IBoxRowProps) => {
  return <AppBox flexDirection="row">{children}</AppBox>;
};

export default AppBoxRow;
