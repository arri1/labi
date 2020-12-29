import React from 'react'
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/mainNavigation'

const App = () => {
  global.foo = { uri : 'https://images.unsplash.com/photo-1562408583-dc1b9836596c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'}
  return(
    <MainNavigation>
      
    </MainNavigation>
  )
}
export default App;