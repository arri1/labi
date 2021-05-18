import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import BottomRouter from "./bottomRouter"
import Login from "../scripts/login"
import Registration from "../scripts/registration"

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
                name={'BottomRouter'}
                component={BottomRouter}
                options={
                    {headerShown: false}
                }
            />
        </Stack.Navigator>
    )
}

export default MainRouter
