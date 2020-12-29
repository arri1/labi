import React from 'react'
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/mainNavigation'

const App = () => {
    global.foo = { uri: 'https://background.su/files/contents/85/bg5e7b5975c85f9.jpg' }
    return (
        <MainNavigation>
            </MainNavigation>
    )
}
export default App;