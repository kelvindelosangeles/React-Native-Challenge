import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Colors } from "../../../Constants/Colors";

import ProgressCircle from "react-native-progress-circle";
import { useSpring, animated, config } from "react-spring";

const Percentage = props => {
  const [percent, setPercent] = useState(false);

  // Wrap a text component in an animated container
  const AnimatedProgressCircle = animated(ProgressCircle);

  // Define the animations
  const animation = useSpring({
    val: percent ? props.percent : 0,
    config: config.molasses
  });

  // React spring has a bug with animating on start in version 8, work around until v9 is out of beta
  !percent && setPercent(true);
  return (
    <View style={styles.percentContainer}>
      <AnimatedProgressCircle
        percent={animation.val}
        radius={50}
        borderWidth={10}
        color={Colors.gold}
        shadowColor={Colors.lightGrey}
        bgColor={Colors.white}
      >
        <Text style={styles.number}>{props.percent}</Text>
        <Text style={styles.percentSymbol}>%</Text>
      </AnimatedProgressCircle>
    </View>
  );
};

const styles = StyleSheet.create({
  percentContainer: {
    alignSelf: "center",
    position: "absolute",
    backgroundColor: Colors.white,
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#CECECE",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  number: {
    fontSize: 40,
    fontWeight: "bold"
  },
  percentSymbol: {
    marginTop: -8
  }
});

export default Percentage;
