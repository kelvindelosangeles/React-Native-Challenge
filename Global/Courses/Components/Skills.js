import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";

import { useSpring, animated, config } from "react-spring";

const Skills = props => {
  // Wrap the View component with an animated wrapper to recieve instructions on how to animate

  const skillsMapped =
    // Check that there are skills
    props.skills.length > 0 &&
    props.skills.map(skill => {
      // extract the skill percentage from props and parse to string
      const AnimatedSkillFill = animated(View);
      const percent = skill.percent.toString().concat("%");

      // Defined Animation to and from
      const Fill = useSpring({
        from: { width: "0%" },
        to: { width: percent },
        config: config.wobbly
      });
      return (
        <View style={styles.skill} key={skill.skillId}>
          <AnimatedSkillFill
            style={{
              ...styles.skillFill,
              backgroundColor: "#".concat(skill.color.substr(4)),
              ...Fill
            }}
          />
          <View style={styles.skillPercentWrapper}>
            <Text style={styles.skillPercent}>{skill.percent}</Text>
          </View>
          <Text style={styles.skillTitle}>{skill.title}</Text>
        </View>
      );
    });

  return (
    <View style={styles.skillsWrapper}>
      <View style={styles.skillsContainer}>{skillsMapped}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  skillsWrapper: {
    alignItems: "center",
    paddingHorizontal: "7.5%"
  },
  skillsContainer: {
    alignItems: "center",
    padding: 18,
    marginTop: 8,
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 9
  },
  skill: {
    height: 40,
    width: "100%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.lightGrey,
    marginVertical: 4,
    overflow: "hidden"
  },
  skillFill: {
    height: 40,
    borderRadius: 20,
    position: "absolute",
    backgroundColor: "green"
  },
  skillPercentWrapper: {
    marginLeft: 4,
    marginRight: 12,
    height: 34,
    width: 34,
    borderRadius: 34 / 2,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center"
  },
  skillPercent: {
    fontWeight: "bold",
    fontSize: 16
  },
  skillTitle: {
    fontWeight: "bold"
  }
});

export default Skills;
