import { StyleSheet } from "react-native";
import { theme } from "@/theme";
import { sizes } from "@/constants";

const styles = StyleSheet.create({
  text: {
    color: theme.grey.black,
    fontSize: sizes.elements.text.medium,
    fontFamily: "Oxanium_400Regular",
  },
});

export default styles;
