import React from 'react';
import { StyleSheet, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import Lab1 from "./screens/lab1"
import Lab2 from "./screens/lab2"
import Lab3 from "./screens/lab3"
import Lab3a from "./screens/lab3a"
import Home from "./screens/home"

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              color = focused ? '#fff' : '#dcdcdc';
              size = focused ? 25 : 22;
              iconName = 'home';
              return <Foundation name={iconName} size={size} color={color} style={styles.Home} />;
            } else if (route.name === 'lab1' || route.name === 'lab2' || route.name === 'lab3' || route.name === 'lab4' || route.name === 'Axios') {
              color = focused ? '#fff' : '#dcdcdc';
              size = focused ? 25 : 22;
              iconName = 'bookmark';
              return <Feather name={iconName} size={size} color={color} />;
            }
          }
        })}
        tabBarOptions={{
          style: {
            position: 'absolute',
            width: 411,
            height: 55,
            bottom: 0,
            overflow: 'scroll',
            backgroundColor: '#98BB88',
          },
          labelStyle: {
            fontFamily: 'times new roman',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 9,
            lineHeight: 10,
            textAlign: 'center',
            color: '#FFFFFF'
          },
          tabStyle: {
            justifyContent: 'center'
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#dcdcdc'
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="lab1" component={Lab1} />
        <Tab.Screen name="lab2" component={Lab2} />
        <Tab.Screen name="lab3" component={Lab3} />
        <Tab.Screen name="Axios" component={Lab3a} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Home: {
    color: '#FBB9B9',
  },
});

export default App;