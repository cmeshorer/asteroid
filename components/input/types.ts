import { TextInputProps } from "react-native";

export type InputProps = Pick<
  TextInputProps,
  "placeholder" | "value" | "onChangeText" | "editable"
>;
