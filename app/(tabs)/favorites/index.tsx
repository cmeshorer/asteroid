import React from "react";
import { StyleSheet } from "react-native";
import { useAppSelector } from "@/hooks";
import Page from "@/components/page";
import AsteroidList from "@/components/asteroid/list";
import Animation from "@/components/animation";

const FavoritesScreen = () => {
  const styles = StyleSheet.create({
    page: { paddingBottom: 0 },
  });
  const likedAsteroids = useAppSelector(
    (state) => state.asteroids.likedAsteroids
  );
  const EmptyComponent = () => {
    return (
      <Animation
        source={require("../../../assets/animations/space-book.json")}
      />
    );
  };

  return (
    <Page style={styles.page}>
      <AsteroidList
        asteroids={likedAsteroids}
        detailsPath="/favorites/details"
        EmptyComponent={EmptyComponent}
      />
    </Page>
  );
};

export default FavoritesScreen;
