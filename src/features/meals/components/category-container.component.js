import React from "react";
import styled from "styled-components";
import { FlatList } from "react-native";
// COMPONENTS
import { CategoryCard } from "../components/meal-card.component";
const CategoryWrapper = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: column;
`;

export const CategoryContainer = () => {
  return (
    <CategoryWrapper>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        renderItem={() => <CategoryCard />}
        keyExtractor={(item) => item.id}
      />
    </CategoryWrapper>
  );
};
