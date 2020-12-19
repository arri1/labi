import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lab2 from '../screens/lab2'
const Tab = createBottomTabNavigator();
const BottomTabRouter = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Lab2" component={Lab2} />
        </Tab.Navigator>
    )
}

export default BottomTabRouter;