import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab2 from "./screens/lab2"
import Lab3 from "./screens/lab3"

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="𝕃𝔸𝔹𝟚" component={Lab2} />
        <Tab.Screen name="𝕃𝔸𝔹𝟛" component={Lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;