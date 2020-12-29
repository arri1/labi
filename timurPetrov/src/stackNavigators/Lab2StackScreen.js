import React from 'react'
import Lab2 from '../screens/lab2'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Lab2StackScreen = () =>{
    const Lab2Stack = createStackNavigator();
    return(
      <Lab2Stack.Navigator>
        <Lab2Stack.Screen name="Lab2" component={Lab2}/>
      </Lab2Stack.Navigator>
    )
  }
export default Lab2StackScreen