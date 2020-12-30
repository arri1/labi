import React from 'react'
import 'react-native-gesture-handler';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lab2 from './src/screens/lab2'
import Lab3 from './src/screens/lab3'
import FlashMessage from "react-native-flash-message";
import { ApolloProvider } from '@apollo/client'
import RootNav from './src/navigation/rootNav'
import apollo from './src/utils/apollo'

const App = () => {
  global.foo = { uri: 'https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg' }
  return (
    <ApolloProvider client={apollo}>
      <RootNav />
      <FlashMessage position="top" />
    </ApolloProvider>
  )
}

export default App; 