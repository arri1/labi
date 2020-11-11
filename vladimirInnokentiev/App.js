import * as React from 'react';
import { Button, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab2 from './screens/lab2.js'
import Lab3 from './screens/lab3.js'

function DetailsScreen() {
  return (
    <ImageBackground source={{uri:'https://image.freepik.com/free-photo/blur-view-pedestrian-walking-street_1252-1171.jpg'}} 
                              style={{width: '100%', height: '100%'}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{uri: "https://lh3.googleusercontent.com/proxy/AUOjqHosowHoxxcQael0EVwuRgroRR08Cr6RvDPq_Bzl-s4CQUurZZ2Se3fCMH-Pj2nCiAHhA8O_0dqhvMzpJ0F98p1TJTbSm1OLXOxZd--sFwFU95Y"}}
              style={{width: '100%', height: '100%'}}/>
      </View>
    </ImageBackground>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={{uri:'https://previews.123rf.com/images/franzidraws/franzidraws1511/franzidraws151100007/48042630-seamless-pattern-of-the-great-wave-off-kanagawa.jpg'}} 
                              style={{width: '100%', height: '100%'}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Just button!" onPress={() => navigation.navigate('JUST DO IT!')}/>
      </View>
    </ImageBackground>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="JUST DO IT!" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Circle" component={Lab2} />
    </SettingsStack.Navigator>
  );
}

function TodoStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Todo" component={Lab3} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Circle" component={SettingsStackScreen} />
        <Tab.Screen name="Todo" component={TodoStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}