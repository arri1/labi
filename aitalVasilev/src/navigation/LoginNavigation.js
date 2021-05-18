import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// Custom components
import MainNavigation from './MainNavigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const Stack = createStackNavigator()

const LoginNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
        >
            <Stack.Screen
                name={'Login'}
                component={Login}
            />
            <Stack.Screen
                name={'Signup'}
                component={Signup}
            />
            <Stack.Screen
                name={'MainNavigation'}
                component={MainNavigation}
            />
        </Stack.Navigator>
    )
}

export default LoginNavigation
