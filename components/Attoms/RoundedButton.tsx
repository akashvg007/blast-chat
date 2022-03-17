import React from "react";
import { View, StyleSheet } from "react-native";
import { spaces } from "../../utils/spaces";
import { colors } from "../../utils/colors";
import { Button } from "react-native-paper";

interface propInterface {
  title: string;
  handlePress: any;
}
export const RoundedButton = ({ title, handlePress }: propInterface) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={handlePress}
        style={styles.btn}
        color={colors.prgreen}
      >
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
    padding: spaces.xsm,
    color: colors.white,
  },
  btn: {
    borderRadius: 5,
    height: spaces.xxl,
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
  },
});
