import { useLocalSearchParams } from "expo-router";
import AsteroidDetails from "@/components/asteroid/details";
import Page from "@/components/page";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Asteroid } from "@/models/asteroids";

const HomeDetailsScreen = () => {
  const id = useLocalSearchParams().id;
  const foundAsteroids = useAppSelector(
    (state) => state.asteroids.foundAsteroids
  );
  const asteroid = foundAsteroids.find(
    (foundAsteroid) => foundAsteroid.id === id
  ) as Asteroid;

  return (
    <Page>
      <AsteroidDetails asteroid={asteroid} />
    </Page>
  );
};

export default HomeDetailsScreen;
