import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Lab2 from "../screens/lab2"
import Lab3 from "../screens/lab3"
import Settings from "../screens/settings"

const Tab = createBottomTabNavigator();

const BottomRouter = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Lab2" component={Lab2}/>
            <Tab.Screen name="Lab3" component={Lab3}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}
export default BottomRouter
