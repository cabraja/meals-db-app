import React from "react";
import { StyleSheet, View } from "react-native";

export const Spacer = ({ variant }) => {
  let margin = 0;
  if (variant === "small") {
    margin = 4;
  }
  if (variant === "medium") {
    margin = 12;
  }
  if (variant === "large") {
    margin = 18;
  }

  return <View style={{ margin: margin }}></View>;
};
