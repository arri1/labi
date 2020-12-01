import React from 'react'
import 'react-native-gesture-handler';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lab2 from './src/screens/lab2'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const Lab2Stack = createStackNavigator();

const Lab2StackScreen = () =>{
  return(
    <Lab2Stack.Navigator>
      <Lab2Stack.Screen name="Lab2" component={Lab2}/>
    </Lab2Stack .Navigator>
  )
}
const Lab3StackScreen = () =>{
  return(
    <Lab2Stack.Navigator>
      <Lab2Stack.Screen name="Lab2" component={HomeScreen}/>
    </Lab2Stack .Navigator>
  )
}
const App = () => {
    return (
      <NavigationContainer>
          <Tab.Navigator tabBarOptions={{
            labelStyle:{
              fontSize:30,
            }
          }}>
              <Tab.Screen name="Lab 2" component={Lab2StackScreen} />
              <Tab.Screen name="Lab 3" component={Lab3StackScreen} />
          </Tab.Navigator>
      </NavigationContainer>        
    )
}
const styles = StyleSheet.create ({
   
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:24,
  },
})
export default App;