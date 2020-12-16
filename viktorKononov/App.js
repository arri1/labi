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

export default function App() {
    return (
      <NavigationContainer>
        <BottomTabRouter/>
      </NavigationContainer>
    );
} 