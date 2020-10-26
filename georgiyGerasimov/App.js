import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ApolloProvider} from '@apollo/react-hooks'
import apollo from './utils/apollo'
import Lab2 from "./screens/lab2"
import Lab3 from "./screens/lab3"

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <ApolloProvider client={apollo}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Lab2" component={Lab2}/>
                    <Tab.Screen name="Lab3" component={Lab3}/>
                </Tab.Navigator>
            </NavigationContainer>
        </ApolloProvider>

    )
}
export default App;
