import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { PageProps } from "./types";

const Page = ({ children, style }: PageProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Page;
