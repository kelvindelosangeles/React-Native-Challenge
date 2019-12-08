import React, { useState } from "react";
import { View, Dimensions } from "react-native";

import Data from "../../Data/data.json";

import Course from "./Components/Course";
import Tasks from "./Components/Tasks.js";
import Skills from "./Components/Skills.js";

import Carousel from "react-native-snap-carousel";

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState([0]);

  const _renderItem = ({ item, index }) => {
    return <Course course={item} />;
  };

  return (
    <View>
      <Carousel
        onSnapToItem={index => {
          setActiveCourse(index);
        }}
        data={Data}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width * 0.85}
      />
      {/* <Course course={Data[activeCourse]} /> */}
      <Tasks task={Data[activeCourse].task} />
      <Skills skills={Data[activeCourse].skills} />
    </View>
  );
};

export default Courses;
