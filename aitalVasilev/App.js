import 'react-native-gesture-handler'
import React from 'react'
import Lab2 from './screens/Lab2'
import Lab3 from './screens/Lab3'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Lab2" component={Lab2} options={{ title: 'Lab 2' }} />
                <Tab.Screen name="Lab3" component={Lab3} options={{ title: 'Lab 3' }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App
