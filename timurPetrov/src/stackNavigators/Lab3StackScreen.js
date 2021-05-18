import React from 'react'
import { Text } from 'react-native'
import Lab3 from '../screens/lab3'
import { createStackNavigator } from '@react-navigation/stack'
import styles from '../styles/styles'

const Lab3StackScreen = () => {
    const Lab3Stack = createStackNavigator();
    return (
        <Lab3Stack.Navigator>
            <Lab3Stack.Screen name="Lab3" component={Lab3}
                options={{
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTitle: (
                        <Text
                            style={{
                                ...styles.navHeaderTitle,
                                color: "black"
                            }}>
                            To Do List
                        </Text>
                    )
                }} />
        </Lab3Stack.Navigator>
    )
}
export default Lab3StackScreen