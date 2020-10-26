import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks'
import apollo from './utils/apollo'
import MainRouter from "./routers/mainRouter"

const App = () => {
    return (
        <ApolloProvider client={apollo}>
            <NavigationContainer>
                <MainRouter/>
            </NavigationContainer>
        </ApolloProvider>

    )
}
export default App;
