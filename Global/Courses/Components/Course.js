import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";
import Points from "./Points";
import Rank from "./Rank";
import Percentage from "./Percentage";

const Course = props => {
  const {
    course,
    courseContainer,
    courseHeader,
    courseTitlePre,
    courseTitle
  } = styles;

  const { percent, points, rank, title } = props.course;

  return (
    <View style={course}>
      <View style={courseContainer}>
        <View style={courseHeader}>
          <Points points={points} />
          <Rank rank={rank} />
        </View>
        <Text style={courseTitlePre}>Journey Of</Text>
        <Text style={courseTitle}>{title}</Text>
      </View>
      <Percentage percent={percent} />
    </View>
  );
};

const styles = StyleSheet.create({
  course: {
    marginTop: 12,
    marginBottom: 8
  },
  courseContainer: {
    marginTop: 24,
    height: 204,
    width: "100%",
    paddingVertical: 14,
    backgroundColor: Colors.white,
    borderRadius: 9,
    alignItems: "center"
  },
  courseHeader: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#F2F2F2",
    borderBottomWidth: 1
  },
  courseTitlePre: {
    marginTop: 90,
    fontSize: 12
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: "bold",
    maxWidth: 250,
    textAlign: "center"
  }
});

export default Course;
