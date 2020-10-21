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


function example({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back Lab2" />
    </View>
  );
}
const Drawer = createDrawerNavigator();

const App = () =>{    
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Lab2">
        <Drawer.Screen name="Lab2" component={Lab2} />
        <Drawer.Screen name="Notifications" component={example} />
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