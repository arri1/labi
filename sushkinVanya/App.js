import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Lab2 from "./components/Lab2";
import MainPage from "./components/MainPage";

const RootStack = createStackNavigator(
  {
    MainPage: MainPage,
    Lab2: Lab2,
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}