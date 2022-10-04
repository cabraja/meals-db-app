import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const H1 = styled.Text`
  font-size: 28px;
`;

const CategoryWrapper = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-bottom: 18px;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageInside = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgba(66, 66, 66, 0.76);
  width: 100%;
  height: 100%;
  padding: 22px;
`;

const CategoryTitle = styled.Text`
  font-size: 20px;
  color: white;
  letter-spacing: 1px;
`;

export const CategoryCard = () => {
  return (
    <CategoryWrapper
      source={{ uri: "https://www.themealdb.com/images/category/vegan.png" }}
      resizeMode="cover"
    >
      <ImageInside>
        <CategoryTitle>Vegan</CategoryTitle>
      </ImageInside>
    </CategoryWrapper>
  );
};
