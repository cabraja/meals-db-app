import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const MealCardWrapper = styled(Card)`
  margin-bottom: 18px;
`;

export const MealCard = ({ item = {}, fetchSingleMeal, showModal }) => {
  const { id, name, image } = item;
  return (
    <MealCardWrapper elevation={3}>
      <Card.Cover source={{ uri: image }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => {
            fetchSingleMeal(id);
            showModal();
          }}
        >
          Recipe
        </Button>
      </Card.Actions>
    </MealCardWrapper>
  );
};
