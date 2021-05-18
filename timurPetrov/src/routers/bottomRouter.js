import 'react-native-gesture-handler';
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from '../screens/settings'
import styles from '../styles/styles'
import Lab2 from '../screens/lab2'
import Lab3 from '../screens/lab3'


Entypo.loadFont();

const BottomRouter = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator 
        tabBarOptions={{
          labelStyle:{
            ...styles.navTabLabel,
            color:'white'
          },
          tabStyle:{
            backgroundColor:"#181818"
          },
          showLabel: false,
        }}
        >
            <Tab.Screen name="Lab 1" component={Lab2} 
            options={{
              tabBarIcon: () => 
              (<Entypo name = 'image-inverted' size = {24} color = '#FFFFFF'/>
              )
              }}/>
            <Tab.Screen name="Lab 2" component={Lab3} 
            options={{
              tabBarIcon: () => 
              (<Entypo name = 'list' size = {24} color = '#FFFFFF'/>
              )
              }}/>
          
            <Tab.Screen name="Settings" component={Settings} 
           options={{
            tabBarIcon: () => 
            (<Entypo name = 'cog' size = {24} color = '#FFFFFF'/>
            )
            }}/>
        </Tab.Navigator>
    )
  }



    
        
    

export default BottomRouter