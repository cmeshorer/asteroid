import { StyleSheet } from "react-native";
import { theme } from "@/constants/theme";
import { sizes } from "@/constants/ui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.spacing.medium,
    backgroundColor: theme.primary,
  },
});

export default styles;
