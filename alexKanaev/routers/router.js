import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from "./tabNavigator"
import Login from "../screens/login"
import Registration from "../screens/signup"

const Stack = createStackNavigator()

const MainRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Login'}
                options={
                    {
                        title: 'Вход'
                    }
                }
                component={Login} />
            <Stack.Screen
                name={'Registration'}
                options={
                    {
                        title: 'Регистрация'
                    }
                }
                component={Registration} />
            <Stack.Screen
                name={'BottomRouter'}
                component={TabNavigator}
                options={
                    { headerShown: false }
                }
            />
        </Stack.Navigator>
    )
}

export default MainRouter