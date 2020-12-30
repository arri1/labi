import React from 'react'
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/mainNavigation'

const App = () => {
  global.foo = {uri : 'https://w-dog.ru/wallpapers/15/6/542818431002571.jpg'}
  return(
    <MainNavigation>
      
    </MainNavigation>
  )
}
export default App;