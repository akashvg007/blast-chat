import React, { useState } from "react";
import { Button, Provider } from "react-native-paper";
import { Text, View } from "react-native";
import { Popup } from "../Attoms/modal";

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
          <Text onPress={(e) => onSelect(d)} key={d}>
            {d}
          </Text>
        ))}
      </Popup>
      <Button
        mode="outlined"
        style={{ marginTop: 30, width: "100%" }}
        onPress={showModal}
      >
        {selected}
      </Button>
    </Provider>
  );
};
