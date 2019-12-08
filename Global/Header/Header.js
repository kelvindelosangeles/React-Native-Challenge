import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { Colors } from "../../Constants/Colors";

const Header = props => {
  return (
    <View style={Styles.Header}>
      <TouchableWithoutFeedback onPress={props.toggle}>
        <View>
          <Image
            source={require("../../assets/Icons/HamburgerMenu.png")}
            style={Styles.HamburgerMenu}
          />
          <Text style={Styles.HeaderLabel}>My Status</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={Styles.ProfileImageContainer}>
        <Image
          source={require("../../assets/User/ProfileImage.jpg")}
          style={Styles.ProfileImage}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 56,
    paddingBottom: 12,
    paddingHorizontal: "7.5%",
    backgroundColor: Colors.primary
  },
  HeaderLabel: {
    fontSize: 27,
    fontWeight: "bold",
    color: Colors.white
  },
  HamburgerMenu: {
    marginBottom: 10
  },
  ProfileImageContainer: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: Colors.white,
    overflow: "hidden"
  },
  ProfileImage: {
    height: "100%",
    width: "100%"
  }
});

export default Header;
