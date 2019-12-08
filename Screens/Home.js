import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { Colors } from "../Constants/Colors";
import Header from "../Global/Header/Header";

import Courses from "../Global/Courses/Courses";

const Home = props => {
  const sidebarToggle = () => {
    props.navigation.toggleDrawer();
  };

  console.log(props);
  return (
    <ScrollView style={{ backgroundColor: Colors.primary }}>
      <View style={styles.screen}>
        <Header toggle={sidebarToggle} />
        <Courses />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    // paddingTop: 56,
    paddingBottom: 40
  }
});

export default Home;
