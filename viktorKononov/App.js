import 'react-native-gesture-handler';
import React from 'react'
import { View, 
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabRouter from './routers/bottomTabRouter';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "BottomTabRouter" component = {BottomTabRouter}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
} 