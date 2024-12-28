import React, { memo, useCallback } from "react";
import { FlatList, View } from "react-native";
import Asteroid from "@/components/asteroid/item";
import { Asteroid as AsteroidItem } from "@/model";
import { pageSize } from "@/service";
import styles from "./styles";
import { AsteroidListProps } from "./types";

const AsteroidList = ({
  asteroids,
  detailsPath,
  EmptyComponent,
  FooterComponent,
  onEndReached,
}: AsteroidListProps) => {
  const hasAsteroids = asteroids.length > 0;
  const onEndReachedThreshold = 0.1;

  const keyExtractor = (item: AsteroidItem) => item.id;
  const Item = memo(
    ({ item, index }: { item: AsteroidItem; index: number }) => {
      return <Asteroid key={index} asteroid={item} detailsPath={detailsPath} />;
    },
    (prevProps, nextProps) => {
      return prevProps.item.isLiked === nextProps.item.isLiked;
    }
  );
  const renderItem = useCallback(
    ({ item, index }: { item: AsteroidItem; index: number }) => (
      <Item item={item} index={index} />
    ),
    []
  );

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
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      initialNumToRender={pageSize}
      ItemSeparatorComponent={ItemSeparator}
      ListEmptyComponent={DisplayedEmptyComponent}
      ListFooterComponent={FooterComponent}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      scrollEnabled={hasAsteroids}
      onEndReachedThreshold={onEndReachedThreshold}
      onEndReached={onEndReached}
    />
  );
};

export default AsteroidList;
