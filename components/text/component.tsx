import React from "react";
import { Text as RNText } from "react-native";
import styles from "./styles";
import { TextProps } from "./types";

const Text = ({ children, style }: TextProps) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

export default Text;
