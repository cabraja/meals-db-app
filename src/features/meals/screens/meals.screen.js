import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Search } from "../components/search.component";
// COMPONENTS
import { CategoryContainer } from "../components/category-container.component";

export const MealScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      <Search />
      {!selectedCategory ? <CategoryContainer /> : <Text>Meals</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
