import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import BottomTabRouter from "./bottomTabRouter"
import Login from "../screens/login"
import Registration from "../screens/registration"

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
                name={'BottomTabRouter'}
                component={BottomTabRouter}
                options={
                    {headerShown: false}
                }
            />
        </Stack.Navigator>
    )
}
export default MainRouter