/*import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import lab2 from "./screens/lab2"

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({

})

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return(<View>
    <Tab.Navigator>
      <Tab.Screen name="Home" />
      <Tab.Screen name="Settings" />
    </Tab.Navigator>
  </View>)
}
export default App;*/
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab1 from "./screens/lab1"
import Lab2 from "./screens/lab2"


const HomeScreen = () => {
  return (
    <View style={style.centrify}>
      <Text>Home!</Text>
    </View>
  );
}

const FirstLab = () => {
  return (
    <View style={style.centrify}>
      <Text>Settings!</Text>
    </View>
  );
}

const SecondLab = () => {
  return (
    <View style={style.centrify}>
      <Text>Second Screen</Text>
    </View>
  );
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