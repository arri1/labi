import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks'
import client from './src/utils/Apollo'
import MainRouter from './src/routers/mainRouter'

const App = () => {
  global.foo = { uri : 'https://images.unsplash.com/photo-1562408583-dc1b9836596c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'}
  return(
    <ApolloProvider client={client}>
      <NavigationContainer>
          <MainRouter />
      </NavigationContainer>
  </ApolloProvider>
  )
}
export default App; 