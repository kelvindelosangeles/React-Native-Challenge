import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../Constants/Colors";

const Points = props => {
  return (
    <View style={styles.pointsContainer}>
      <FontAwesome
        name="star"
        size={24}
        style={styles.star}
        color={Colors.gold}
      />
      <Text style={styles.star}>{props.points}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  star: {
    marginRight: 8
  }
});

export default Points;
