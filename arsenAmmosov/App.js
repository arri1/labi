import React from 'react'
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/mainNavigation'

const App = () => {
  global.foo = {uri : 'https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg'}
  return(
    <MainNavigation>
      
    </MainNavigation>
  )
}
export default App;