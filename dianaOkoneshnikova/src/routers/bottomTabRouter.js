import React from 'react'
import Lab2StackScreen from '../stackNavigators/Lab2StackScreen'
import Lab3StackScreen from '../stackNavigators/Lab3StackScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import styles from '../styles/styles'

const BottomTabRouter = () => {
    const Tab = createBottomTabNavigator();
    return (
          <Tab.Navigator 
          tabBarOptions={{
            labelStyle:{
              ...styles.navTabLabel,
              color:'black'
            },
            tabStyle:{
              backgroundColor:"#D3F9D5"
            }
          }}
          >
              <Tab.Screen name="Lab 1" component={Lab2StackScreen} 
              options={{
                tabBarLabel: 'Задний фон'

              }} />
              <Tab.Screen name="Lab 2" component={Lab3StackScreen} 
              options={{
                tabBarLabel: 'Список задач'
              }}/>
          </Tab.Navigator>  
    )
}
export default BottomTabRouter