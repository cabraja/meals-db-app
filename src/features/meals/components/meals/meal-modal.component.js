import React from "react";
import { Text, StyleSheet } from "react-native";
import { Modal } from "react-native-paper";
export const MealModal = ({ visible, hideModal }) => {
  return (
    <Modal
      style={styles.modal}
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modal}
    >
      <Text>Example Modal. Click outside this area to dismiss.</Text>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 30,
    marginTop: 80,
    marginBottom: 80,
    flex: 1,
    alignItems: "center",
  },
});
