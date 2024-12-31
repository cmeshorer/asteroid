import { StyleSheet } from "react-native";
import { theme } from "@/constants/theme";
import { sizes } from "@/constants/ui";

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
