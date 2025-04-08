import { PropsWithChildren } from "react";
import { useInitialConfigs } from "./hooks/useInitialConfigs";
import AppThemeProvider from "./Providers/AppThemeProvider";

const AppContainer = ({ children }: PropsWithChildren) => {
  useInitialConfigs();

  return <AppThemeProvider>{children}</AppThemeProvider>;
};

export default AppContainer;
