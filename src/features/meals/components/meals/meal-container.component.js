import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import styled from "styled-components";
import {
  Portal,
  Button,
  Provider,
  ActivityIndicator,
} from "react-native-paper";
// COMPONENTS
import { MealCard } from "./meal-card.component";
// SERVICES
import { URL } from "../../../../services/urls";
import {
  TransformMeals,
  TransformSingleMeal,
} from "../../../../services/meals/meals.service";
import { MealModal } from "./meal-modal.component";

const Title = styled.Text`
  font-size: 26px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 8px;
`;

const MealsWrapper = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 10px;
  flex-direction: column;
`;

export const MealContainer = ({ selectedCategory, setSelectedCategory }) => {
  const [isLoading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [singleMeal, setSingleMeal] = useState(null);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // FETCHING DATA FUNCTIONS
  const fetchSingleMeal = (id) => {
    fetch(`${URL.mealById}${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleMeal(TransformSingleMeal(data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${URL.filterByCat}${selectedCategory.name}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMeals(TransformMeals(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Provider>
      <Portal>
        <MealModal hideModal={hideModal} visible={visible} />
      </Portal>
      <MealsWrapper>
        <Button mode={"outlined"} onPress={() => setSelectedCategory(null)}>
          Back to categories
        </Button>
        <Title>{selectedCategory.name}</Title>
        {!isLoading ? (
          <FlatList
            data={meals}
            renderItem={({ item }) => (
              <MealCard
                fetchSingleMeal={fetchSingleMeal}
                showModal={showModal}
                item={item}
              />
            )}
          />
        ) : (
          <ActivityIndicator
            style={styles.loading}
            animating={true}
            size={50}
            color={"tomato"}
          />
        )}
      </MealsWrapper>
    </Provider>
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: 30,
  },
});
