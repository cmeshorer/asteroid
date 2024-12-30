import React from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { toggleAsteroidLike } from "@/asteroidsSlice";
import { sizes } from "@/constants";
import { useAppDispatch } from "@/hooks";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "@/theme";
import { LikeButtonProps } from "./types";

const LikeButton = ({ asteroidId, isLiked }: LikeButtonProps) => {
  const dispatch = useAppDispatch();
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onLike = () => {
    scale.value = withSpring(
      1.5,
      {
        damping: 3,
        stiffness: 150,
      },
      () => {
        scale.value = withSpring(1);
      }
    );
    dispatch(toggleAsteroidLike(asteroidId));
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity onPress={onLike}>
        <Entypo
          name={`heart${isLiked ? "" : "-outlined"}`}
          color={isLiked ? theme.complementary.brick : theme.grey.dark}
          size={sizes.elements.icon.medium}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default LikeButton;
