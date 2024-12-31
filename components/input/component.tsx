import { TextInput } from "react-native";
import { theme } from "@/constants/theme";
import { values } from "@/constants/ui";
import styles from "./styles";
import { InputProps } from "./types";

const Input = ({ placeholder, onChangeText, value, editable }: InputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.grey.regular}
      style={[
        styles.container,
        { opacity: values.opacity[editable ? "opaque" : "half"] },
      ]}
      editable={editable}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect={false}
    />
  );
};

export default Input;
