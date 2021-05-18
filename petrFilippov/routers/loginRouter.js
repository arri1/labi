import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import BottomTab from "./bottomTab"
import Login from "../screens/login"
import Registration from "../screens/registration"

const Stack = createStackNavigator()

const LoginRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Login'}
                options={
                    {
                        title: 'Вход'
                    }
                }
                component={Login}/>
            <Stack.Screen
                name={'Registration'}
                options={
                    {
                        title: 'Регистрация'
                    }
                }
                component={Registration}/>
            <Stack.Screen
                name={'BottomTab'}
                component={BottomTab}
                options={
                    {headerShown: false}
                }
            />
        </Stack.Navigator>
    )
}

export default LoginRouter