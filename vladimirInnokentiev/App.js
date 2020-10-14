import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab2 from './screens/lab2.js'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lab2" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={{uri:'https://previews.123rf.com/images/franzidraws/franzidraws1511/franzidraws151100007/48042630-seamless-pattern-of-the-great-wave-off-kanagawa.jpg'}} 
                                style={{width: '100%', height: '100%'}}>
        <Text>Welcome to the club buddy!</Text>
      </ImageBackground>
    </View>
  );
}
export default App;