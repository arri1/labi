import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../screens/comp/tabs.js'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}