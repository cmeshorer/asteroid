import React from "react";
import { View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Text from "@/components/text";
import { theme } from "@/constants/theme";
import { sizes } from "@/constants/ui";
import { AsteroidDetailsProps } from "./types";
import styles from "./styles";

const AsteroidDetails = ({ asteroid }: AsteroidDetailsProps) => {
  return (
    <View style={styles.asteroidDetailsContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>{asteroid.name}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoSubContainer}>
            <MaterialCommunityIcons
              name="diameter-variant"
              size={sizes.elements.icon.large}
              color={theme.grey.dark}
            />
            <Text style={styles.info}>{asteroid.estimatedDiameter}</Text>
          </View>
          <View style={styles.infoSubContainer}>
            <Entypo
              name="light-up"
              size={sizes.elements.icon.large}
              color={theme.grey.dark}
            />
            <Text style={styles.info}>{asteroid.absoluteMagnitude}</Text>
          </View>
          <View style={styles.infoSubContainer}>
            <Entypo
              name="back-in-time"
              size={sizes.elements.icon.large}
              color={theme.grey.dark}
            />
            <Text style={styles.info}>{asteroid.firstObservationYear}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {asteroid.nextCloseApproach ? (
          <View>
            <Text style={styles.closeApproach}>Next close approach</Text>
            <Text
              style={styles.closeApproachDetail}
            >{`• Date: ${asteroid.nextCloseApproach?.date}`}</Text>
            <Text
              style={styles.closeApproachDetail}
            >{`• Relative velocity: ${asteroid.nextCloseApproach?.relativeVelocity}`}</Text>
            <Text
              style={styles.closeApproachDetail}
            >{`• Miss distance: ${asteroid.nextCloseApproach?.missDistance}`}</Text>
          </View>
        ) : (
          <Text style={styles.closeApproach}>No close approach in sight</Text>
        )}
        <Text
          style={{
            ...styles.safetyLevel,
            color:
              theme.complementary[
                asteroid.isPotentiallyHazardous ? "tangerine" : "pacific"
              ],
          }}
        >
          {asteroid.isPotentiallyHazardous
            ? "Potentially hazardous asteroid"
            : "Safe asteroid"}
        </Text>
      </View>
    </View>
  );
};

export default AsteroidDetails;
