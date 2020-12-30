import 'react-native-gesture-handler';
import React from 'react'
import { View, 
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabRouter from './routers/bottomTabRouter';
import MainNavigation from './src/navigation/mainNavigation'

export default function App() {
  global.foo = {uri : 'https://images.unsplash.com/photo-1561069933-3323a3203b4f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'}
    return (
      <MainNavigation>
      
      </MainNavigation>
    );
}