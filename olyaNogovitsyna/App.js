import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks'
import client from './src/utils/apollo'
import MainRouter from './src/routers/mainRouter'

const App = () => {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <MainRouter />
            </NavigationContainer>
        </ApolloProvider>
    )
}
export default App;