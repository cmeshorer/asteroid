import { Tabs } from "expo-router";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "@/constants/theme";
import { sizes } from "@/constants/ui";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.complementary.steel,
        tabBarStyle: { backgroundColor: theme.secondary, borderTopWidth: 0 },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              color={color}
              size={sizes.elements.icon.medium}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Entypo
              name="heart"
              color={color}
              size={sizes.elements.icon.medium}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
