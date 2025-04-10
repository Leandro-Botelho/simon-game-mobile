import { ThemeProps } from "@/theme";
import { BoxProps } from "@shopify/restyle";
import { PropsWithChildren } from "react";
import AppBox from "../AppBox";

export type IBoxColumnProps = PropsWithChildren<BoxProps<ThemeProps>>;

const BoxColumn = ({ children, ...props }: IBoxColumnProps) => {
  return <AppBox flexDirection="column">{children}</AppBox>;
};

export default BoxColumn;
