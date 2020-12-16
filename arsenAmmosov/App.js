import React from 'react'
import 'react-native-gesture-handler';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lab2 from './src/lab2'
import Lab3 from './src/lab3'

const Tab = createBottomTabNavigator();
const App = () => {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Lab 2" component={Lab2} />
              <Tab.Screen name="Lab 3" component={Lab3} />
          </Tab.Navigator>
      </NavigationContainer>
  )
}
export default App;
