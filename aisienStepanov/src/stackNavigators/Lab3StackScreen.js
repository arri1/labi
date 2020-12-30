import React from 'react'
import Lab3 from '../screens/lab3'
import { createStackNavigator } from '@react-navigation/stack'

const Lab3StackScreen = () => {
    const Lab3Stack = createStackNavigator();
    return (
        <Lab3Stack.Navigator>
            <Lab3Stack.Screen name="Lab3" component={Lab3} />
        </Lab3Stack.Navigator>
    )
}
export default Lab3StackScreen