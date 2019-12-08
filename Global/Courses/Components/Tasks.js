import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";

const Tasks = props => {
  const tagsMapped =
    props.task.tags.length > 0 &&
    props.task.tags.map(tag => {
      return (
        <View style={styles.tagsWrapper} key={tag}>
          <Text style={styles.tag}>{tag}</Text>
        </View>
      );
    });

  return (
    <View style={styles.taskWrapper}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskLabel}>Today's Task</Text>
        <Text style={styles.task}>{props.task.title}</Text>
        <View style={styles.tagsContainer}>{tagsMapped}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    alignItems: "center",
    // backgroundColor: "yellow",
    paddingHorizontal: "7.5%"
  },
  taskContainer: {
    alignItems: "center",
    paddingVertical: 16,
    marginVertical: 8,
    backgroundColor: Colors.white,
    borderRadius: 9,
    width: "100%"
  },
  taskLabel: {
    fontSize: 14
  },
  task: {
    fontSize: 27,
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "bold"
  },
  tagsContainer: {
    flexDirection: "row"
  },
  tagsWrapper: {
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 2,
    borderRadius: 7
  },
  tag: {
    fontSize: 9
  }
});

export default Tasks;
