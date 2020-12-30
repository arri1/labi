import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabRouter from './routers/bottomTabRouter';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "BottomTabRouter" component = {BottomTabRouter}
          options={{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
} 