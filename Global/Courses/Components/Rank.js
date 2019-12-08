import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../../Constants/Colors";

const Rank = props => {
  return (
    <View style={styles.RankContainer}>
      <Entypo
        name="trophy"
        size={24}
        style={{ marginRight: 8 }}
        color={Colors.gold}
      />
      <Text>{props.rank}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  RankContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default Rank;
