import { StyleSheet } from "react-native";
import { theme } from "@/theme";
import { sizes, styles as constantStyles } from "@/constants";

const styles = StyleSheet.create({
  asteroidContainer: {
    backgroundColor: theme.grey.white,
    padding: sizes.spacing.medium,
    borderRadius: sizes.radius.large,
    ...constantStyles.shadows,
  },
  info: { color: theme.grey.regular, marginLeft: sizes.spacing.tiny },
  infoContainer: { flexDirection: "row", alignItems: "center" },
  bottomContainer: { flexDirection: "row", justifyContent: "space-between" },
  likeContainer: { position: "absolute", top: 0, right: 0 },
  topContainer: { marginBottom: sizes.spacing.large },
  subtitle: {
    color: theme.complementary.bazaar,
    fontSize: sizes.elements.text.big,
    textAlign: "center",
  },
  title: {
    color: theme.complementary.bazaar,
    fontSize: sizes.elements.text.major,
    fontFamily: "Oxanium_700Bold",
    textAlign: "center",
    marginBottom: sizes.spacing.tiny,
  },
});

export default styles;
