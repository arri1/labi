import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from "./screens/home";
import Lab2 from "./screens/lab2";
import Lab3 from "./screens/lab3";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ℍ𝕆𝕄𝔼') {
              iconName = 'home-filled';
            } else if (route.name === '𝕃𝔸𝔹𝟚' || route.name === '𝕃𝔸𝔹𝟛') {
              iconName = 'format-list-bulleted';
            }
            color = focused ? '#fff' : '#dcdcdc';
            size = focused ? 25 : 22;

            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          style: {
            height: 50,
            backgroundColor: '#757575',
            borderTopWidth: 0.5,
            borderTopColor: '#757575'
          },
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold'
          },
          tabStyle: {
            justifyContent: 'center'
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#dcdcdc'
        }}
      >
        <Tab.Screen name='ℍ𝕆𝕄𝔼' component={Home} />
        <Tab.Screen name='𝕃𝔸𝔹𝟚' component={Lab2} />
        <Tab.Screen name='𝕃𝔸𝔹𝟛' component={Lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;