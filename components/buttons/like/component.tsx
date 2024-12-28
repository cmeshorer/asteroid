import React from "react";
import { TouchableOpacity } from "react-native";
import { toggleAsteroidLike } from "@/asteroidsSlice";
import { useAppDispatch } from "@/hooks";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "@/theme";
import { LikeButtonProps } from "./types";
import { sizes } from "@/constants";

const LikeButton = ({ asteroidId, isLiked }: LikeButtonProps) => {
  const dispatch = useAppDispatch();
  const onLike = () => {
    dispatch(toggleAsteroidLike(asteroidId));
  };

  return (
    <TouchableOpacity onPress={onLike}>
      <Entypo
        name={`heart${isLiked ? "" : "-outlined"}`}
        color={isLiked ? theme.complementary.brick : theme.grey.dark}
        size={sizes.elements.icon.medium}
      />
    </TouchableOpacity>
  );
};

export default LikeButton;
