import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Modal, Portal } from "react-native-paper";
import { Text } from "react-native";

export const Popup = ({ children, show, hideModal }: any) => {
  const [visible, setVisible] = useState(show);

  const containerStyle = { backgroundColor: "white", padding: 20 };
  useEffect(() => {
    setVisible(show);
  }, [show]);
  return (
    <Portal>
      <Modal
        // style={{ height: 80, width: "80%", left: 0, top: 50 }}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        {children}
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    width: "100%",
  },
});
