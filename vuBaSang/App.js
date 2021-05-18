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
