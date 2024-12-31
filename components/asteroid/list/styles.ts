import { StyleSheet } from "react-native";
import { sizes } from "@/constants/ui";

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingBottom: sizes.spacing.medium,
  },
  emptyComponentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemSeparator: {
    height: sizes.spacing.medium,
  },
});

export default styles;
