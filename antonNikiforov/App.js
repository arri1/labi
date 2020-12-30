import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Lab2 from './screens/Lab2';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 50,
            backgroundColor: '#000000',
            borderTopWidth: 1,
            borderTopColor: '#F8F8FF',
          },
          labelStyle: {
            fontSize: 17,
            fontFamily: 'serif',
          },
          tabStyle: {
            justifyContent: 'center'
          },
          activeTintColor: '#8A2BE2',
          inactiveTintColor: '#F8F8FF'
        }}
      >
        <Tab.Screen name='HomeScreen' component={HomeScreen} />
        <Tab.Screen name='Lab2' component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;