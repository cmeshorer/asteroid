import { StyleSheet } from "react-native";
import { sizes } from "@/constants";
import { theme } from "@/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.grey.white,
    height: sizes.elements.input,
    borderRadius: sizes.radius.medium,
    padding: sizes.spacing.small,
    fontSize: sizes.elements.text.medium,
  },
});

export default styles;
