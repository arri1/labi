import 'react-native-gesture-handler'
import React from 'react'
import { Dimensions, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// Apollo
import { ApolloProvider } from '@apollo/client'
import client from './src/apollo/client'
import FlashMessage from 'react-native-flash-message'
// Custom
import LoginNavigation from './src/navigation/LoginNavigation'
import DynamicThemeProvider from './src/styles/DynamicThemeProvider'

const { width, height } = Dimensions.get('screen')

const App = () => {
    return (
        <View
            style={{
                width,
                height
            }}
        >
            <DynamicThemeProvider>
                <ApolloProvider client={client}>
                    <NavigationContainer>
                        <LoginNavigation />
                    </NavigationContainer>
                </ApolloProvider>
            </DynamicThemeProvider>
            <FlashMessage position="top" />
        </View>
    )
}

export default App
