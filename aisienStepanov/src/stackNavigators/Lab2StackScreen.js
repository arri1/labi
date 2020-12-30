import React from 'react'
import { Text } from 'react-native'
import Lab2 from '../screens/lab2'
import { createStackNavigator } from '@react-navigation/stack'
import styles from '../styles/styles'


const Lab2StackScreen = () => {
    const Lab2Stack = createStackNavigator();
    return (
        <Lab2Stack.Navigator>
            <Lab2Stack.Screen name="Lab2" component={Lab2}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'silver'
                    },
                    headerTitle: (
                        <Text
                            style={{
                                ...styles.navHeaderTitle,
                                color: "black"
                            }}>
                            Background settings
                        </Text>
                    )
                }}/>
        </Lab2Stack.Navigator>
    )
}
export default Lab2StackScreen