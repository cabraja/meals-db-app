import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const CategoryWrapper = styled.TouchableOpacity`
  margin-bottom: 15px;
`;

const CategoryInside = styled.View`
  background-color: rgba(48, 29, 3, 0.55);
  border-radius: 18px;
`;

const CategoryTitle = styled.Text`
  font-size: 20px;
  color: white;
  letter-spacing: 1px;
  padding: 18px;
  text-align: center;
`;

export const CategoryCard = ({ item = {}, setSelectedCategory }) => {
  const { id, name, image } = item;

  return (
    <CategoryWrapper onPress={() => setSelectedCategory({ name, id })}>
      <ImageBackground source={{ uri: image }} resizeMode="cover">
        <CategoryInside>
          <CategoryTitle>{name}</CategoryTitle>
        </CategoryInside>
      </ImageBackground>
    </CategoryWrapper>
  );
};
