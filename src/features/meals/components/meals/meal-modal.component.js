import React from "react";
import { Text, StyleSheet, View, ScrollView, FlatList } from "react-native";
import { Modal } from "react-native-paper";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
// COMPONENTS
import { Spacer } from "../../../../components/Spacer";

const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
`;
const Subtitle = styled.Text`
  font-size: 18px;
  color: grey;
`;

const Ingridient = styled.Text`
  font-size: 16px;
`;

export const MealModal = ({ visible, hideModal, singleMeal }) => {
  const { id, name, category, area, ingridients, instructions } = singleMeal;

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modal}
      style={styles.modalWrapper}
    >
      <ScrollView>
        <Title>{name}</Title>
        <Subtitle>
          {area}, {category}
        </Subtitle>
        <Spacer variant={"small"} />

        {ingridients.map((item) => (
          <Ingridient key={item.id}>
            <Ionicons name={"checkmark-circle"} size={16} color={"tomato"} />{" "}
            {item.name}, {item.measure}
          </Ingridient>
        ))}
        <Spacer variant={"small"} />
        <Text>{instructions}</Text>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 14,
    justifyContent: "flex-start",
    borderRadius: 8,
  },
  modalWrapper: {
    marginLeft: 42,
    marginRight: 42,
    borderRadius: 8,
    marginTop: 50,
    marginBottom: 50,
  },
});
