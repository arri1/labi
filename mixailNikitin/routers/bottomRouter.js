import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';
import Lab4 from '../screens/Lab4';
import Settings from '../screens/settings';

const Tab = createBottomTabNavigator();

const bottomRouter = () => {
  return (
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 120,
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
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Lab2' component={Lab2} />
        <Tab.Screen name='Lab3' component={Lab3} />
        <Tab.Screen name='Lab4' component={Lab4} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
  );
};

export default bottomRouter;