import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab1 from "./screens/lab1"
import Lab2 from "./screens/lab2"
import Home from "./screens/home"

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="lab1" component={Lab1} />
        <Tab.Screen name="lab2" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;