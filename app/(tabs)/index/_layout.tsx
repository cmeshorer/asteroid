import { theme } from "@/theme";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTintColor: theme.complementary.steel as string,
          headerStyle: { backgroundColor: theme.secondary as string },
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          headerTitle: "Asteroid",
          headerTintColor: theme.complementary.steel as string,
          headerStyle: { backgroundColor: theme.secondary as string },
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
