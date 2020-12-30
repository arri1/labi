import React from 'react'
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/mainNavigation'

const App = () => {
  global.foo = {uri : 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
  return(
    <MainNavigation>
      
    </MainNavigation>
  )
}
export default App;