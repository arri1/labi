import React, {useState} from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Button 
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Lab2 from "./scripts/lab2";
import Lab3_2 from "./scripts/lab3_2";
import Title from "./scripts/title";
import signUp from "./scripts/figma/signUp";
import signIn from "./scripts/figma/signIn";
import toDoList from "./scripts/figma/todo";
import reg from "./scripts/registration";
import cat from "./scripts/cat";




const Drawer = createDrawerNavigator();

const App = () =>{    
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Lab2">
        <Drawer.Screen name="Lab2" component={Lab2} />
        <Drawer.Screen name="Lab3" component={Lab3_2} />
        <Drawer.Screen name="Title" component={Title} />
        <Drawer.Screen name="To do list" component={toDoList} />
        <Drawer.Screen name="reg" component={reg} />
        <Drawer.Screen name="signUp" component={signUp} />
        <Drawer.Screen name="signIn" component={signIn} />
        <Drawer.Screen name="cat" component={cat} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
  },
  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  nav: {
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingTop: 10,
  },
})

export default App;