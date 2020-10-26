import React from 'react';
import {View,Dimensions} from "react-native"
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks'
import apollo from './utils/apollo'
import MainRouter from "./routers/mainRouter"

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
                    <MainRouter/>
                </NavigationContainer>
            </ApolloProvider>
        </View>
    )
}
export default App;
