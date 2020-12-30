import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lab2 from '../src/lab2'
import Lab3 from '../src/lab3'
const Tab = createBottomTabNavigator();
const BottomTabRouter = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Lab2" component={Lab2} />
            <Tab.Screen name="Lab3" component={Lab3} />
        </Tab.Navigator>
    )
}

export default BottomTabRouter;