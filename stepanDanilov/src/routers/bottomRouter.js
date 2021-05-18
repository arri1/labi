import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from '../screens/settings'
import styles from '../styles/styles'
import Entypo from "react-native-vector-icons/Entypo"
import Lab2StackScreen from '../stackNavigators/Lab2StackScreen'
import Lab3StackScreen from '../stackNavigators/Lab3StackScreen'
import SettingsStackScreen from '../stackNavigators/SettingsStackScreen'

Entypo.loadFont();

const Tab = createBottomTabNavigator();

const BottomRouter = () => {
    return (
        <Tab.Navigator  tabBarOptions={{
            labelStyle:{
              ...styles.navTabLabel,
              activeTintColor: '#FFFFFF',
              inactiveTintColor: '#AAAAAA',
              color:'white'
            },
            tabStyle:{
              backgroundColor:"#181818"
            },
            showLabel: false,
          }}>
            <Tab.Screen name="Lab2" component={Lab2StackScreen}
            options={{
                tabBarIcon: () => 
                (<Entypo name = 'image-inverted' size = {24} color = '#FFFFFF'/>
                )
                }}/>
            <Tab.Screen name="Lab3" component={Lab3StackScreen}
            options={{
                tabBarIcon: () => 
                (<Entypo name = 'list' size = {24} color = '#FFFFFF'/>
                )
                }}/>
            <Tab.Screen name="Settings" component={SettingsStackScreen} 
            options={{
                tabBarIcon: () => 
                (<Entypo name = 'cog' size = {24} color = '#FFFFFF'/>
                )
                }}/>
        </Tab.Navigator>
    )
}
export default BottomRouter