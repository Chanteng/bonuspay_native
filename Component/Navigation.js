import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons"



//Screens
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";


//Screens Name
const homeName = "Home";
const profileName = "Profile";

const fullScreenWidth = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={homeName} screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;
          let routeName = route.name;

          if(routeName === homeName) {
            iconName = focused ? "home" : "home-outline"
          } else if(routeName === profileName) {
            iconName = focused ? "person" : "person-outline";
          } 
          return <Ionicons name={iconName} size={size} color={color} />
        }
      })} 
      
      
      
      tabBarOptions={{
        activeTintColor: "lightseagreen",
        inactiveTintColor: "grey",
        labelStyle: {fontSize: 16},
        style: {width: fullScreenWidth}
    }}>


        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={profileName} component={Profile} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
