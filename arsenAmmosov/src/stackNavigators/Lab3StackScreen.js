import React from 'react'
import Lab3 from '../screens/lab3'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styles from '../styles/styles'

const Lab3StackScreen = () =>{
    const Lab3Stack = createStackNavigator();
    return(
      <Lab3Stack.Navigator>
        <Lab3Stack.Screen name="Lab3" component={Lab3}
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
              Список
            </Text>
          )
          }}/>
      </Lab3Stack.Navigator>
    )
  }
export default Lab3StackScreen