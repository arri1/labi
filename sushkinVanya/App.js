import React from 'react';
import {Dimensions, View} from "react-native"
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks'
import FlashMessage from "react-native-flash-message";
import Lab2 from "./components/Lab2";
import Lab3 from "./components/Lab3";
import Lab4 from "./components/Lab4";
import MainPage from "./components/MainPage";
import apollo from './utils/apollo'
import Lab5 from './scripts/screens/Lab5'

const {width, height} = Dimensions.get('screen')


const App = () => {
    return (
        <View style={
            {
                width,
                height
            }
        }>
            <ApolloProvider client={apollo}>
                <NavigationContainer>
                    <Lab5/>
                </NavigationContainer>
            </ApolloProvider>
            <FlashMessage position="top"/>
        </View>
    )
};


export default App;