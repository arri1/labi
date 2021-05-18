import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../navigation/Navigation'
import Login from './login'
import Registration from "./registration"

const Stack = createStackNavigator()

const Lab5 = () => {
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
                name={'Navigation'}
                component={Navigation}
                options={
                    {headerShown: false}
                }
            />
        </Stack.Navigator>
    )
}

export default Lab5