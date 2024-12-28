import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { sizes } from "@/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.spacing.medium,
    backgroundColor: theme.primary,
  },
});

export default styles;
