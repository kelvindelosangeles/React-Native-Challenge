import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import { Colors } from "../Constants/Colors";

import Home from "../Screens/Home";

const AppStack = createStackNavigator(
  { Home: Home },
  {
    defaultNavigationOptions: {
      // Using a custom Navigation Header
      header: null
    }
  }
);

const Sidebar = createDrawerNavigator(
  {
    Home: AppStack,
    Shop: AppStack,
    Favorites: AppStack,
    Account: AppStack,
    Settings: AppStack
  },
  {
    drawerType: "back",
    contentOptions: {
      activeTintColor: Colors.primary,
      backgroundColor: "yellow",
      labelStyle: {
        fontSize: 24,
        paddingVertical: 20
      }
    }
  }
);

export default createAppContainer(Sidebar);
