import React from "react";
import { StyleSheet, View } from "react-native";
import { populateAsteroids } from "@/asteroidsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { service } from "@/service";
import Page from "@/components/page";
import Input from "@/components/input";
import Text from "@/components/text";
import { sizes } from "@/constants";
import { theme } from "@/theme";
import AsteroidList from "@/components/asteroid/list";
import Loader from "@/components/loader";
import EmptyAnimation from "@/components/animations/empty";

const HomeScreen = () => {
  const [page, setPage] = React.useState(0);
  const [isFetching, setIsFetching] = React.useState(false);
  const [isEndReached, setIsEndReached] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const spaceShipSource = require("../../../assets/animations/space-ship.json");
  const dispatch = useAppDispatch();
  const foundAsteroids = useAppSelector(
    (state) => state.asteroids.foundAsteroids
  );
  const displayedAsteroids = foundAsteroids?.filter((foundAsteroid) =>
    foundAsteroid.name.toLowerCase().includes(search)
  );
  const isSearching = search.length > 0;

  const onSearch = (text: string) => {
    setSearch(text);
  };
  const onEndReached = () => {
    if (!isEndReached && !isFetching && page > 0 && !isSearching) {
      getAsteroids();
    }
  };
  const getAsteroids = async () => {
    try {
      setIsFetching(true);
      const asteroids = await service.asteroids.browse(page);
      dispatch(populateAsteroids(asteroids));
      setPage(page + 1);
      if (asteroids.length === 0) setIsEndReached(true);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };
  React.useEffect(() => {
    getAsteroids();
  }, []);

  const styles = StyleSheet.create({
    endReached: {
      marginTop: sizes.spacing.medium,
      color: theme.complementary.pacific,
      alignSelf: "center",
    },
    error: {
      color: theme.complementary.cinnabar,
      fontSize: sizes.elements.text.large,
      textAlign: "center",
    },
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: { marginBottom: sizes.spacing.medium },
    nextPageIndicator: { marginTop: sizes.spacing.medium },
    page: { paddingBottom: 0 },
  });

  const EmptyComponent = () => {
    return foundAsteroids.length === 0 ? (
      <Loader />
    ) : (
      <EmptyAnimation source={spaceShipSource} />
    );
  };
  const FooterComponent = () =>
    isSearching ? null : isFetching && page > 0 ? (
      <Loader style={styles.nextPageIndicator} />
    ) : isEndReached ? (
      <Text style={styles.endReached}>All asteroids loaded 💫</Text>
    ) : null;

  return (
    <Page style={styles.page}>
      {error ? (
        <View style={styles.errorContainer}>
          <EmptyAnimation source={spaceShipSource} />
          <Text style={styles.error}>
            An error has occured. Please try again later.
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Search by name..."
              onChangeText={onSearch}
              value={search}
              editable={foundAsteroids.length > 0}
            />
          </View>
          <AsteroidList
            asteroids={displayedAsteroids}
            // @ts-ignore
            // Issue typing the detailsPath prop (Expo Router's "Route" type does handle relative paths)
            detailsPath="./details"
            EmptyComponent={EmptyComponent}
            FooterComponent={FooterComponent}
            onEndReached={onEndReached}
          />
        </>
      )}
    </Page>
  );
};

export default HomeScreen;
