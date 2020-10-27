import 'react-native-gesture-handler'
import React from 'react'
// Paper
import {
    DefaultTheme,
    Provider as PaperProvider
} from 'react-native-paper'
// Custom
import MainNavigation from './src/navigation/MainNavigation'
// theme
import theme from './src/styles/theme'

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <MainNavigation />
        </PaperProvider>
    )
}

export default App
