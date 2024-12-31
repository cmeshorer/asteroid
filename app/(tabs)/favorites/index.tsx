import React from "react";
import { StyleSheet } from "react-native";
import Page from "@/components/page";
import AsteroidList from "@/components/asteroid/list";
import EmptyAnimation from "@/components/animations/empty";
import { useAppSelector } from "@/hooks/useAppSelector";

const FavoritesScreen = () => {
  const spaceBookSource = require("../../../assets/animations/space-book.json");
  const likedAsteroids = useAppSelector(
    (state) => state.asteroids.likedAsteroids
  );

  const styles = StyleSheet.create({ page: { paddingBottom: 0 } });

  const EmptyComponent = () => {
    return <EmptyAnimation source={spaceBookSource} />;
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
