import { router } from "expo-router";
import { RoutesProps } from "../types/routes.type";

export const handleNavigate = (
  route: RoutesProps,
  params?: Record<string, any>
) => {
  router.push({
    pathname: route,
    params,
  });
};
