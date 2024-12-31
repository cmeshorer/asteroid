import { useLocalSearchParams } from "expo-router";
import AsteroidDetails from "@/components/asteroid/details";
import Page from "@/components/page";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Asteroid } from "@/models/asteroids";

const FavoritesDetailsScreen = () => {
  const id = useLocalSearchParams().id;
  const likedAsteroids = useAppSelector(
    (state) => state.asteroids.likedAsteroids
  );
  const asteroid = likedAsteroids.find(
    (likedAsteroid) => likedAsteroid.id === id
  ) as Asteroid;

  return (
    <Page>
      <AsteroidDetails asteroid={asteroid} />
    </Page>
  );
};

export default FavoritesDetailsScreen;
