import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomRouter from './bottomRouter'
import Login from '../screens/login'
import Signup from '../screens/signup'

const Stack = createStackNavigator()

const MainRouter = () => {
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
                name={'BottomRouter'}
                component={BottomRouter}
            />
        </Stack.Navigator>
    )
}
export default MainRouter