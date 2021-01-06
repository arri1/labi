import React from 'react'
import Settings from '../screens/settings'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import styles from '../styles/styles'

const SettingsStackScreen = () =>{
    const Lab2Stack = createStackNavigator();
    return(
      <Lab2Stack.Navigator>
        <Lab2Stack.Screen name="Settings" component={Settings}
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
export default SettingsStackScreen