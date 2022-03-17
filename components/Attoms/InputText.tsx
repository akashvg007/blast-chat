import React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { colors } from "../../utils/colors";

interface propInterface {
  value: string;
  onChange: any;
  label: string;
}

export const InputText = ({ value, onChange, label }: propInterface) => {
  return (
    <View style={styles.textWrapper}>
      <TextInput
        label={label}
        value={value}
        mode="flat"
        style={styles.text}
        onChange={(text) => onChange(text)}
        autoFocus={true}
        autoComplete={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.white,
    width: "90%",
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
