import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomRouter from "./bottomRouter"
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
                        title: 'Log in'
                    }
                }
                component={Login} />
            <Stack.Screen
                name={'Registration'}
                options={
                    {
                        title: 'Registration'
                    }
                }
                component={Registration} />
            <Stack.Screen
                name={'BottomRouter'}
                component={BottomRouter}
                options={
                    { headerShown: false }
                }
            />
        </Stack.Navigator>
    )
}

export default MainRouter