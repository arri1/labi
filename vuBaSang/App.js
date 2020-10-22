import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {Dimensions, StyleSheet} from 'react-native'
import Lab2 from "./screens/lab2"
import Lab3 from "./screens/lab3"

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        width,
        height
    }
})

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Лаб2"
                    component={Lab2}
                />
                <Tab.Screen
                    name="Лаб3"
                    component={Lab3}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default App;
