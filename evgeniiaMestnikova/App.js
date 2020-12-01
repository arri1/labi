import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import MainRouter from './src/routers/mainRouter'
import BottomRouter from './src/routers/bottomRouter'

const App = () => {
  return (
          <NavigationContainer>
              <MainRouter />
          </NavigationContainer>
  )
}
export default App;