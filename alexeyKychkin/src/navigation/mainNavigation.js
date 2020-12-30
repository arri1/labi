import React from 'react'
import Lab2StackScreen from '../stackscreens/Lab2StackScreen'
import Lab3StackScreen from '../stackscreens/Lab3StackScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import styles from '../styles/styles'
import Settings from '../screens/settings'


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
              <Tab.Screen name="Lab 2" component={Lab2StackScreen} 
              options={{
                tabBarLabel: 'Выбор фона'
              }} />
              <Tab.Screen name="Lab 3" component={Lab3StackScreen} 
              options={{
                tabBarLabel: 'Список дел'
              }}/>
              <Tab.Screen name="Setting" component={Settings} 
              options={{
                tabBarLabel: 'Настройки'
              }}/>
          </Tab.Navigator>
      </NavigationContainer>        
    )
}

export default MainNavigation 