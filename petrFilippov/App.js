import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconEntypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import Lab1 from "./screens/lab1"
import Lab2 from "./screens/lab2"
import Lab3 from "./screens/lab3"

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
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          color = focused ? '#0F56B3' : '#818181';
          size = focused ? 25 : 22;

          if (route.name === 'Home') {
            iconName = 'home';
            return <IconEntypo name={iconName} size={size} color={color} />;
          } else if (route.name === 'First lab' || route.name === 'Second lab') {
            iconName = 'folder1';
            return <AntDesign name={iconName} size={size} color={color} />;
          }
          else if (route.name === 'Settings'){
            iconName = 'settings';
            return <Octicons name={iconName} size={size} color={color} />;
          }
        }
      })}
      tabBarOptions={{
        style: {
          height: 65,
        },
        labelStyle: {
          fontSize: 12,
          fontFamily: 'Inter-SemiBold',
          fontWeight: 'bold'
        },
        tabStyle: {
          justifyContent: 'center'
        },
        activeTintColor: '#0F56B3',
        inactiveTintColor: '#818181'
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="First lab" component={Lab2} />
        <Tab.Screen name="Second lab" component={Lab3} />
        <Tab.Screen name="Settings" component={Lab1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  centrify: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    justifyContent: 'center', 
    alignItems: 'center' 
  },
})

export default App;