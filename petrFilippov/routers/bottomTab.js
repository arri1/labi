import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconEntypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import Lab4 from "../screens/lab4"
import Lab2 from "../screens/lab2"
import Settings from "../screens/settings"

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


const BottomTab = () => {
  
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          color = focused ? '#0F56B3' : '#818181';
          size = focused ? 25 : 22;
          if (route.name === 'Home') {
            iconName = 'home';
            return <IconEntypo name={iconName} size={size} color={color} />;
          } 
          if (route.name === 'lab4' || route.name === 'First lab' || route.name === 'Second lab') {
            iconName = 'folder1';
            return <AntDesign name={iconName} size={size} color={color} />;
          }
          if (route.name === 'Settings'){
            iconName = 'settings';
            return <Octicons name={iconName} size={size} color={color} />;
          }
        }
      })}
      tabBarOptions={{
        style: {
          height: 130,
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
        <Tab.Screen name="lab4" component={Lab4} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
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

export default BottomTab;