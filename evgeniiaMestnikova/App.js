import React from 'react'
import { Dimensions, View } from "react-native"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import MainRouter from './src/routers/mainRouter'
import { ApolloProvider } from '@apollo/client'
import apollo from './src/utils/apollo'
import FlashMessage from "react-native-flash-message";

const { width, height } = Dimensions.get('screen')

const App = () => {
  return (
    <View style={
      {
        width,
        height
      }
    }>
      <ApolloProvider client={apollo}>
        <NavigationContainer>
          <MainRouter />
        </NavigationContainer>
      </ApolloProvider>
      <FlashMessage position="top" />
    </View>
  )
}
export default App;