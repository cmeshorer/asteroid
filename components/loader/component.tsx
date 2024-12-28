import React from "react";
import { ActivityIndicator } from "react-native";
import { theme } from "../../theme";
import { LoaderProps } from "./types";

const Loader = ({ size, style }: LoaderProps) => {
  return <ActivityIndicator style={style} size={size} color={theme.tertiary} />;
};

export default Loader;
