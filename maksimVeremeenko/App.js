import React from 'react'
import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lab2 from './src/screens/lab2'
import Lab3 from './src/screens/lab3'

const Tab = createBottomTabNavigator();
const Lab2Stack = createStackNavigator();
const Lab3Stack = createStackNavigator();

const Lab2StackScreen = () => {
    return (
        <Lab2Stack.Navigator>
            <Lab2Stack.Screen name="Lab2" component={Lab2} />
        </Lab2Stack.Navigator>
    )
}
const Lab3StackScreen = () => {
    return (
        <Lab3Stack.Navigator>
            <Lab3Stack.Screen name="Lab3" component={Lab3} />
        </Lab3Stack.Navigator>
    )
}
const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                labelStyle: {
                    fontSize: 30,
                }
            }}>
                <Tab.Screen name="Lab2" component={Lab2StackScreen} />
                <Tab.Screen name="Lab3" component={Lab3StackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default App;
