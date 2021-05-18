import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Settings from '../screens/Settings'

const MainPage = () => {

  return (
  <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Settings') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6b6b6b',
        inactiveTintColor: '#323232',
        activeBackgroundColor: '#323232',
        inactiveBackgroundColor: '#6b6b6b',
        showLabel: false,
        showIcon: true,
        style:{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderTopColor: '#454545',
          borderBottomColor: '#454545'
        }
      }}
>
    <Tab.Screen name="Lab2" component={Lab2} />
    <Tab.Screen name="Lab3" component={Lab3} />
    <Tab.Screen name="Settings" component={Settings} />
</Tab.Navigator>
  );
}

export default class MainPage extends React.Component {
  state = 
  {
    daze: false
  };

  Lab2Click = () => {
    this.props.navigation.navigate('Lab2')
  }

  Lab3Click = () => {
    this.props.navigation.navigate('Lab3')
  }

  Lab4Click = () => {
    this.props.navigation.navigate('Lab4')
  }

  

  render()
  {
    return(
      <View style = {styles.container}>
        <Button 
        title="Lab2"
        color={'#000fff'}
        onPress={(this.Lab2Click)}/>
        <Button 
        title="Lab3"
        color={'#000fff'}
        onPress={(this.Lab3Click)}/>
        <Button 
        title="Lab4"
        color={'#000fff'}
        onPress={(this.Lab4Click)}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MainPage