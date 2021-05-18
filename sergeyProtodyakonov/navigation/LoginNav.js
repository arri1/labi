import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainNav from './MainNav'
import Login from '../screens/Login'
import Registration from "../screens/Registration"

const Stack = createStackNavigator()

const LoginNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Login'}
                options={
                    {
                        title: 'Login',
                        headerStyle: {
                            backgroundColor: '#323232'
                        },
                        headerTintColor: '#ffffff'
                    }
                }
                component={Login}/>
            <Stack.Screen
                name={'Registration'}
                options={
                    {
                        title: 'Registration',
                        headerStyle: {
                            backgroundColor: '#323232'
                        },
                        headerTintColor: '#ffffff'
                    }
                }
                component={Registration}/>
            <Stack.Screen
                name={'MainNav'}
                component={MainNav}
                options={
                    {headerShown: false}
                }
            />
        </Stack.Navigator>
    )
}

export default LoginNav