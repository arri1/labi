import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import BottomRouter from "./bottomRouter"
import Login from "../screens/login"

const Stack = createStackNavigator()

const MainRouter = () => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen
                name={'Login'}
                component={Login}/>
            <Stack.Screen
                name={'BottomRouter'}
                component={BottomRouter}/>
        </Stack.Navigator>
    )
}

export default MainRouter
