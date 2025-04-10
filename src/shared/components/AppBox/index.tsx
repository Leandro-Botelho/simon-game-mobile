import { ThemeProps } from "@/theme";
import { BoxProps } from "@shopify/restyle";
import { PropsWithChildren } from "react";

export type IBoxProps = PropsWithChildren<BoxProps<ThemeProps>>;

const AppBox = ({ children, ...props }: IBoxProps) => {
  return <AppBox {...props}>{children}</AppBox>;
};

export default AppBox;
