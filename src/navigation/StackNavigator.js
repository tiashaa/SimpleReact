import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screen/Login";
import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screen/Home";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const MainStackNavigator = () => {
  return (
        
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={TabNavigator}/>

      </Stack.Navigator>
     

      
   
  );
};

export { MainStackNavigator };