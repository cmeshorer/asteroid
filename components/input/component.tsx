import { TextInput } from "react-native";
import styles from "./styles";
import { InputProps } from "./types";
import { values } from "@/constants";

const Input = ({ placeholder, onChangeText, value, editable }: InputProps) => {
  return (
    <TextInput
      style={[
        styles.container,
        { opacity: values.opacity[editable ? "opaque" : "half"] },
      ]}
      placeholder={placeholder}
      editable={editable}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Input;
