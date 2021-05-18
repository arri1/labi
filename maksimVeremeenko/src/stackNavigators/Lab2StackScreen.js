import React from 'react'
import Lab2 from '../screens/lab2'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styles from '../styles/styles'

const Lab2StackScreen = () =>{
    const Lab2Stack = createStackNavigator();
    return(
      <Lab2Stack.Navigator>
        <Lab2Stack.Screen name="Lab2" component={Lab2}
          options={{
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#181818'
          },
          headerTitle:(
            <Text
            style={{
              ...styles.navHeaderTitle,
              color:"white"
            }}>
              Задний фон
            </Text>
          )
          }}/>
      </Lab2Stack.Navigator>
    )
  }
export default Lab2StackScreen