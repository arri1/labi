import React from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab2 from "../screens/lab2"
import Lab3 from "../screens/lab3"
import Lab4 from "../screens/lab4"
import Lab5 from "../screens/settings"

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            labelStyle: {
                tTransform: "none",
                fontSize: 25,
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            },
            style:{
              borderTopWidth: 2,
              borderBottomWidth: 2,
            }
      }}
    >
        <Tab.Screen 
            name="Lab2" 
            component={Lab2} 
        />
        <Tab.Screen 
            name="Lab3" 
            component={Lab3} 
        />
        <Tab.Screen 
            name="Lab4" 
            component={Lab4} 
        />
        <Tab.Screen 
            name="Lab5" 
            component={Lab5} 
        />
    </Tab.Navigator>

    )
}

export default Navigation;