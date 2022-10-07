import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Search } from "../components/search.component";
// COMPONENTS
import { CategoryContainer } from "../components/category/category-container.component";
import { MealContainer } from "../components/meals/meal-container.component";

export const MealScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      <Search />
      {!selectedCategory ? (
        <CategoryContainer setSelectedCategory={setSelectedCategory} />
      ) : (
        <MealContainer
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
