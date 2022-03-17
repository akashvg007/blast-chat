import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { colors } from "../../utils/colors";
import { spaces } from "../../utils/spaces";
import { IconButton } from "react-native-paper";

interface propInterface {
  title: string;
  back: any;
}

export default function Header({ title, back = null }: propInterface) {
  return (
    <View style={styles.headingRow}>
      {back && (
        <IconButton
          icon={(prop) => (
            <Image source={require("../assets/images/arrowLT.png")} />
          )}
          size={20}
          onPress={(e) => back(false)}
        />
      )}
      <Text style={styles.headingText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bggreen,
    height: spaces.xxxl,
    width: "100%",
  },
  headingText: {
    fontSize: spaces.md,
    paddingLeft: spaces.md,
    color: colors.white,
  },
});
