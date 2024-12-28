import React from "react";
import { View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "@/theme";
import LikeButton from "@/components/buttons/like";
import Text from "@/components/text";
import { sizes } from "@/constants";
import styles from "./styles";
import { AsteroidProps } from "./types";

const Asteroid = ({ asteroid }: AsteroidProps) => {
  return (
    <TouchableOpacity
      style={styles.asteroidContainer}
      onPress={() =>
        router.navigate(
          {
            pathname: "./details",
            params: { id: asteroid.id },
          },
          {
            relativeToDirectory: true,
          }
        )
      }
    >
      <View style={styles.topContainer}>
        <Text style={styles.title}>{asteroid.nameLimited}</Text>
        <Text style={styles.subtitle}>{asteroid.designation}</Text>
        <View style={styles.likeContainer}>
          <LikeButton asteroidId={asteroid.id} isLiked={asteroid.isLiked} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons
            name="diameter-variant"
            size={sizes.elements.icon.medium}
            color={theme.grey.regular}
          />
          <Text style={styles.info}>{asteroid.estimatedDiameter}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Entypo
            name="light-up"
            size={sizes.elements.icon.medium}
            color={theme.grey.regular}
          />
          <Text style={styles.info}>{asteroid.absoluteMagnitude}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Entypo
            name="back-in-time"
            size={sizes.elements.icon.medium}
            color={theme.grey.regular}
          />
          <Text style={styles.info}>{asteroid.firstObservationYear}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Asteroid;
