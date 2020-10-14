import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab1 from "./screens/lab1"
import Lab2 from "./screens/lab2"

const HomeScreen = () => {
  return(
    <View style={style.centrify}>
      <Text>
        Home!!!
      </Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="First lab" component={Lab1} />
        <Tab.Screen name="Second lab" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  centrify: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
})

export default App;