import React, { useState } from "react";
import { Button, Provider } from "react-native-paper";
import { Text, View, StyleSheet } from "react-native";
import { Popup } from "../Attoms/modal";
import { colors } from "../../utils/colors";
import { spaces } from "../../utils/spaces";

interface propInterface {
  data: Array<string>;
}

export const Dropdown = ({ data }: propInterface) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("Select countries");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const onSelect = (val: string) => {
    setSelected(val);
    hideModal();
  };

  return (
    <Provider>
      <Popup show={visible} hideModal={hideModal}>
        {data.map((d: string) => (
          <Text style={styles.items} onPress={(e) => onSelect(d)} key={d}>
            {d}
          </Text>
        ))}
      </Popup>
      <View style={{}}>
        <Button mode="outlined" contentStyle={styles.btn} onPress={showModal}>
          <Text style={styles.title}>{selected}</Text>
        </Button>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row-reverse",
    width: "100%",
    padding: 5,
    borderWidth: 1,
  },
  title: {
    color: colors.black,
  },
  items: {
    padding: spaces.xsm,
    height: spaces.xxl,
    marginBottom: 2,
    fontSize: spaces.md,
    fontStyle: "italic",
    textTransform: "capitalize",
    fontWeight: "600",
  },
});
