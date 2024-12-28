import React from "react";
import { FlatList, View } from "react-native";
import Asteroid from "@/components/asteroid/item";
import { Asteroid as AsteroidItem } from "@/model";
import styles from "./styles";
import { AsteroidListProps } from "./types";

const AsteroidList = ({
  asteroids,
  EmptyComponent,
  FooterComponent,
  onEndReached,
}: AsteroidListProps) => {
  const hasAsteroids = asteroids.length > 0;
  const onEndReachedThreshold = 0.1;

  const Item = ({ item, index }: { item: AsteroidItem; index: number }) => {
    return <Asteroid key={index} asteroid={item} />;
  };

  const ItemSeparator = () => <View style={styles.itemSeparator} />;

  const DisplayedEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentContainer}>
        <EmptyComponent />
      </View>
    );
  };

  return (
    <FlatList
      data={asteroids}
      renderItem={Item}
      ItemSeparatorComponent={ItemSeparator}
      ListEmptyComponent={DisplayedEmptyComponent}
      ListFooterComponent={FooterComponent}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      scrollEnabled={hasAsteroids}
      keyExtractor={(item, index) => index.toString()}
      onEndReachedThreshold={onEndReachedThreshold}
      onEndReached={onEndReached}
    />
  );
};

export default AsteroidList;
