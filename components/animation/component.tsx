import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { AnimationProps } from "./types";
import styles from "./styles";

const Animation = ({ source }: AnimationProps) => {
  const animation = useRef<LottieView>(null);
  return (
    <LottieView
      ref={animation}
      source={source}
      style={styles.container}
      autoPlay
    />
  );
};

export default Animation;
