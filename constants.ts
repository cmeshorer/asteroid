import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const animations = {
  spring: {
    damping: 3,
    stiffness: 150,
  },
};

export const sizes = {
  elements: {
    animation: 300,
    icon: {
      medium: 28,
      large: 36,
    },
    input: 50,
    text: {
      medium: 16,
      big: 18,
      large: 22,
      major: 26,
      huge: 32,
    },
  },
  radius: {
    medium: 16,
    large: 22,
  },
  spacing: {
    tiny: 4,
    small: 12,
    medium: 16,
    large: 32,
    major: 48,
  },
};

export const styles = StyleSheet.create({
  shadows: {
    shadowColor: theme.grey.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 4,
  },
});

export const values = {
  opacity: {
    transparent: 0,
    half: 0.5,
    opaque: 1,
  },
};
