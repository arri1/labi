import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab1 from "./screens/lab1"
import Lab2 from "./screens/lab2"

const Tab = createBottomTabNavigator();

const txtq = () => {
  return(
  <View style={style.txt}>
    <Text>Ya zdec'</Text>
  </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={txtq} />
        <Tab.Screen name="lab1" component={Lab1} />
        <Tab.Screen name="lab2" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  txt: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
})

export default App;