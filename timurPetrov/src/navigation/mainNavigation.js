import React from 'react'
import Lab2 from '../screens/lab2'
import Lab3 from '../screens/lab3'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import styles from '../styles/styles'

const MainNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator 
        tabBarOptions={{
          labelStyle:{
            ...styles.navTabLabel,
            color:'white'
          },
          tabStyle:{
            backgroundColor:"#181818"
          }
        }}
        >
            <Tab.Screen name="Lab 1" component={Lab2} 
            options={{
              tabBarLabel: 'Задний фон'
            }} />
            <Tab.Screen name="Lab 2" component={Lab3} 
            options={{
              tabBarLabel: 'Список дел'
            }}/>
        </Tab.Navigator>
    </NavigationContainer>        
  )
}
export default MainNavigation