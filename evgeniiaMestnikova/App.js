import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import MainRouter from './src/routers/mainRouter'
import { ApolloProvider } from '@apollo/client'
import apollo from './src/utils/apollo'

const App = () => {
  return (
    <ApolloProvider client={apollo}>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </ApolloProvider>
  )
}
export default App;