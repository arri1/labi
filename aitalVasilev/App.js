import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// Custom
import LoginNavigation from './src/navigation/LoginNavigation'
import DynamicThemeProvider from './src/styles/DynamicThemeProvider'

const App = () => {
    return (
        <DynamicThemeProvider>
            <NavigationContainer>
                <LoginNavigation />
            </NavigationContainer>
        </DynamicThemeProvider>
    )
}

export default App
