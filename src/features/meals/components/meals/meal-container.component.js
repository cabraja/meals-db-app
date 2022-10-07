import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import {
  Portal,
  Button,
  Provider,
  ActivityIndicator,
} from "react-native-paper";
// COMPONENTS
import { MealCard } from "./meal-card.component";
import { Spacer } from "../../../../components/Spacer";
// SERVICES
import { URL } from "../../../../services/urls";
import {
  TransformMeals,
  TransformSingleMeal,
} from "../../../../services/meals/meals.service";
import { MealModal } from "./meal-modal.component";

const Header = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 26px;
  text-align: center;
  font-weight: 800;
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
        {singleMeal && (
          <MealModal
            hideModal={hideModal}
            visible={visible}
            singleMeal={singleMeal}
          />
        )}
      </Portal>
      <MealsWrapper>
        <Header>
          <Title>{selectedCategory.name}</Title>
          <Button
            mode={"contained"}
            color={"tomato"}
            onPress={() => setSelectedCategory(null)}
          >
            <Ionicons name={"ios-arrow-back"} size={24} color={"white"} />
          </Button>
        </Header>
        <Spacer variant={"medium"} />

        {/* LIST */}
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
