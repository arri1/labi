import React from 'react'
import Lab2StackScreen from '../stackNavigators/Lab2StackScreen'
import Lab3StackScreen from '../stackNavigators/Lab3StackScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';


const MainNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
          <Tab.Navigator tabBarOptions={{
            labelStyle:{
              fontSize:30,
            }
          }}>
              <Tab.Screen name="Lab 2" component={Lab2StackScreen} />
              <Tab.Screen name="Lab 3" component={Lab3StackScreen} />
          </Tab.Navigator>
      </NavigationContainer>        
    )
}
export default MainNavigation