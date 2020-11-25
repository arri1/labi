import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// Apollo
import { ApolloProvider } from '@apollo/client'
import client from './src/apollo/client'
// Custom
import LoginNavigation from './src/navigation/LoginNavigation'
import DynamicThemeProvider from './src/styles/DynamicThemeProvider'

const App = () => {
    return (
        <DynamicThemeProvider>
            <ApolloProvider client={client}>
                <NavigationContainer>
                    <LoginNavigation />
                </NavigationContainer>
            </ApolloProvider>
        </DynamicThemeProvider>
    )
}

export default App
