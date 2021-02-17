import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import List from "../screen/List";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Entypo name="home" color="white" size={26} />
          ) : (
            <AntDesign name="home" color="white" size={22} />
          ),
      }}
      />
      <Tab.Screen name="List" component={List}
      options={{
        tabBarLabel: "List",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Entypo name="files" color="white" size={26} />
          ) : (
            <AntDesign name="files" color="white" size={22} />
          ),
      }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;