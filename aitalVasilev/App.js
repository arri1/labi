import 'react-native-gesture-handler'
import React from 'react'
// Custom
import MainNavigation from './src/navigation/MainNavigation'
import DynamicThemeProvider from './src/styles/DynamicThemeProvider'

const App = () => {
    return (
        <DynamicThemeProvider>
            <MainNavigation />
        </DynamicThemeProvider>
    )
}

export default App
