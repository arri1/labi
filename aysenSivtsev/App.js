import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Lab2 from "./Screens/Lab2";
import Lab3 from "./Screens/Lab3";
import MainPage from "./Screens/MainPage";

const RootStack = createStackNavigator(
  {
    MainPage: MainPage,
    Lab2: Lab2,
    Lab3: Lab3,
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}