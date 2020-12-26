import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lab2 from '../screens/lab2'
const Tab = createBottomTabNavigator();
const BottomTabRouter = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Lab2" component={Lab2} />
<<<<<<< HEAD

=======
>>>>>>> 37baa313212319fa4199cf361d6310b35527bd0d
        </Tab.Navigator>
    )
}

export default BottomTabRouter;