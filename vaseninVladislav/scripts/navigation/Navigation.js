import React from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab2 from "../screens/lab2"
import Lab3 from "../screens/lab3"
import Lab4 from "../screens/lab4"

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
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
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default Navigation;