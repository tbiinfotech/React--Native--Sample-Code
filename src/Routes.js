import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import DrawerMenu from "./Menu/menu";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import Home from "./Home/Home";
//define all routes here access the screen
const Drawer = DrawerNavigator(
  {
  Login: { screen: Login },
  Register: { screen: Register },
  Home: { screen: Home },
 
});

export default Drawer;
