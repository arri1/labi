import React from 'react'
import 'react-native-gesture-handler';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lab2 from './src/screens/lab2'
import Lab3 from './src/screens/lab3'
import MainNavigation from './src/navigation/mainNavigation'

const App = () => {
  global.foo = {uri : 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'}
  return(
    <MainNavigation>

    </MainNavigation>
  )
}

export default App; 