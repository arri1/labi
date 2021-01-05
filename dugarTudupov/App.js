import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {Dimensions, View} from 'react-native'
import { ApolloProvider } from '@apollo/client'
import FlashMessage from "react-native-flash-message";
import MainRouter from './src/routers/mainRouter'
import apollo from './src/utils/apollo'

const {width, height} = Dimensions.get('screen')

const App = () => {
  global.foo = {uri : 'https://images.unsplash.com/photo-1561069933-3323a3203b4f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'}
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