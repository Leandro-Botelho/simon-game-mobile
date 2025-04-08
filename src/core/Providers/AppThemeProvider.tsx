import { theme } from "@/theme";
import { ThemeProvider } from "@shopify/restyle";
import { PropsWithChildren } from "react";

const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
