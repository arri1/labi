import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from '../screens/settings'


const Tab = createBottomTabNavigator();

const BottomRouter = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}
export default BottomRouter 