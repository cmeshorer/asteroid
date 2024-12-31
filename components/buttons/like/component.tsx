import React from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Entypo from "@expo/vector-icons/Entypo";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { toggleAsteroidLike } from "@/state/asteroidsSlice";
import { theme } from "@/constants/theme";
import { animations, sizes } from "@/constants/ui";
import { LikeButtonProps } from "./types";

const LikeButton = ({ asteroidId, isLiked }: LikeButtonProps) => {
  const dispatch = useAppDispatch();
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onLike = () => {
    scale.value = withSpring(1.5, animations.spring, () => {
      scale.value = withSpring(1);
    });
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
