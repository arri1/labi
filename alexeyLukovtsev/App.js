import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab1 from "./screens/lab1"
import Lab2 from "./screens/lab2"
import Lab3 from "./screens/lab3"
import Lab3a from "./screens/lab3a"
import Home from "./screens/home"

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="lab1" component={Lab1} />
        <Tab.Screen name="lab2" component={Lab2} />
        <Tab.Screen name="lab3" component={Lab3} />
        <Tab.Screen name="Axios" component={Lab3a} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;