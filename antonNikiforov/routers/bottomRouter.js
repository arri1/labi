import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';
import Lab4 from '../screens/Lab4';
import Settings from '../screens/settings'


const Tab = createBottomTabNavigator();

const BottomRouter = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeScreen} />
        <Tab.Screen name='Lab2' component={Lab2} />
        <Tab.Screen name='Lab3' component={Lab3} />
        <Tab.Screen name='Lab4' component={Lab4} />
        <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}
export default BottomRouter