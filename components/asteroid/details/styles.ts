import { StyleSheet } from "react-native";
import { theme } from "@/theme";
import { sizes, styles as constantStyles } from "@/constants";

const styles = StyleSheet.create({
  asteroidDetailsContainer: {
    flex: 1,
    padding: sizes.spacing.medium,
    borderRadius: sizes.radius.large,
    backgroundColor: theme.grey.white,
    ...constantStyles.shadows,
  },
  bottomContainer: { flex: 1, justifyContent: "space-between" },
  closeApproach: {
    textAlign: "center",
    fontFamily: "Oxanium_700Bold",
    fontSize: sizes.elements.text.major,
    marginBottom: sizes.spacing.medium,
  },
  closeApproachDetail: {
    fontSize: sizes.elements.text.large,
    marginBottom: sizes.spacing.small,
  },
  info: { fontFamily: "Oxanium_700Bold", marginLeft: sizes.spacing.tiny },
  infoContainer: { flexDirection: "row", justifyContent: "space-between" },
  infoSubContainer: { flexDirection: "row", alignItems: "center" },
  safetyLevel: {
    textAlign: "center",
    fontFamily: "Oxanium_700Bold",
    fontSize: sizes.elements.text.huge,
  },
  topContainer: { marginBottom: sizes.spacing.major },
  title: {
    color: theme.complementary.bazaar,
    fontSize: sizes.elements.text.huge,
    fontFamily: "Oxanium_700Bold",
    marginBottom: sizes.spacing.medium,
    textAlign: "center",
  },
});

export default styles;
