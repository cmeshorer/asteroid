import React from "react";
import { ActivityIndicator } from "react-native";
import { theme } from "@/constants/theme";
import { LoaderProps } from "./types";

const Loader = ({ style }: LoaderProps) => {
  return (
    <ActivityIndicator size="large" style={style} color={theme.tertiary} />
  );
};

export default Loader;
