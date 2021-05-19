import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from '../screens/settings'
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import colors from '../colors/colors';
import Entypo from "react-native-vector-icons/Entypo";
import {StyleSheet} from 'react-native'

Entypo.loadFont();

const Tab = createBottomTabNavigator();

const BottomRouter = () => {
    return (
        <Tab.Navigator       
            tabBarOptions = {{
            style: styles.tabBar,
            activeTintColor: colors.white,
            inactiveTintColor: colors.grey,
            showLabel: false,
        }}>
            <Tab.Screen 
                name="Lab2" 
                component={Lab2} 
                options={{
                    tabBarIcon: ({color}) => 
                    (<Entypo name = 'image' size = {24} color = {color}/>
                    )
                    }}/>
            <Tab.Screen 
                name="Lab3" 
                component={Lab3} 
                options={{
                    tabBarIcon: ({color}) => 
                    (<Entypo name = 'list' size = {24} color = {color}/>
                    )
                    }}/>
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarIcon:({color}) => 
                    (<Entypo name = 'user' size = {24} color = {color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor : colors.black,
    }
})

export default BottomRouter 