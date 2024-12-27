import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen
        name="details"
        options={{
          headerTitle: "Details",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
