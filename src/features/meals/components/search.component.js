import React from "react";
import { View, Platform, StatusBar } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  justify-content: center;
  padding: 20px;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  background-color: #ee9211;
`;

export const Search = () => {
  return (
    <SearchContainer>
      <Searchbar placeholder="Search meals" value={""} />
    </SearchContainer>
  );
};
