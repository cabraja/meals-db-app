import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { FlatList, Text, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
// COMPONENTS
import { CategoryCard } from "./category-card.component";
// SERVICES
import { URL } from "../../../../services/urls";
import { transofrmCategories } from "../../../../services/category/category.service";

const Title = styled.Text`
  font-size: 26px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 20px;
`;

const CategoryWrapper = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: column;
`;

export const CategoryContainer = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL.categories)
      .then((res) => res.json())
      .then((data) => {
        setCategories(transofrmCategories(data));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CategoryWrapper>
      <Title>Categories</Title>
      {!isLoading ? (
        <FlatList
          data={categories}
          style={styles.list}
          renderItem={({ item }) => (
            <CategoryCard
              setSelectedCategory={setSelectedCategory}
              item={item}
            />
          )}
          keyExtractor={({ id }) => id}
        />
      ) : (
        <ActivityIndicator
          style={styles.loading}
          animating={true}
          size={50}
          color={"tomato"}
        />
      )}
    </CategoryWrapper>
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: 30,
  },
});
