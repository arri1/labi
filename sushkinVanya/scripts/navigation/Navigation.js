import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab2 from "../../components/Lab2"
import Lab3 from "../../components/Lab3"
import Lab4 from "../../components/Lab4"
import Lab5 from "../screens/settings"

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <SafeAreaView style= {
                {
                flex:1
            }
        }>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: {
                        fontSize: 25,
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    style:{
                    marginBottom: 20
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
        </SafeAreaView>
    )
}

export default Navigation;