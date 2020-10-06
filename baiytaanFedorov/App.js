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
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 40,
            backgroundColor: '#cfd6e6',
            borderTopWidth: 0.5,
            borderTopColor: '#fb9800',
          },
          labelStyle: {
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold'
          },
          tabStyle: {
            justifyContent: 'center'
          },
          showIcon: false
        }}
      >
        <Tab.Screen name="𝕃𝔸𝔹𝟚" component={Lab2} />
        <Tab.Screen name="𝕃𝔸𝔹𝟛" component={Lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;