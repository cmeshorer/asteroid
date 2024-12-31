import { Stack } from "expo-router";
import { theme } from "@/constants/theme";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTintColor: theme.complementary.steel,
          headerStyle: { backgroundColor: theme.secondary },
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          headerTitle: "Asteroid",
          headerTintColor: theme.complementary.steel,
          headerStyle: { backgroundColor: theme.secondary },
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
