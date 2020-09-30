import React from 'react';
import {Dimensions, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
                <Tab.Screen name="Lab2" component={Lab2}/>
                <Tab.Screen name="Lab3" component={Lab3}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
}
export default App;
