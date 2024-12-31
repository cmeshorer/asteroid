import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { EmptyAnimationProps } from "./types";
import styles from "./styles";

const EmptyAnimation = ({ source }: EmptyAnimationProps) => {
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

export default EmptyAnimation;
