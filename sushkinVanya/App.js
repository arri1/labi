import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Lab2 from "./components/Lab2";
import Lab3 from "./components/Lab3";
import Lab4 from "./components/Lab4";
import MainPage from "./components/MainPage";
import MainPage from "./screens/Login";

const {width, height} = Dimensions.get('screen')



const RootStack = createStackNavigator(
  {
    MainPage: MainPage,
    Lab2: Lab2,
    Lab3: Lab3,
    Lab4: Lab4,
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

  
  render() {
    return <AppContainer />+
    <View style={
      {
          width,
          height
      }
  }>
      <ApolloProvider client={apollo}>
          <NavigationContainer>
              <LoginNav/>
          </NavigationContainer>
      </ApolloProvider>
      <FlashMessage position="top"/>
  </View>;
  }
}