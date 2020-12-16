import 'react-native-gesture-handler';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab2 from '../screens/lab2'
import Lab3 from '../screens/lab3'

const Tab = createBottomTabNavigator();

function DetailsScreen() {
    return (
      <ImageBackground source={{uri:'shorturl.at/moNTY'}} 
                                style={{width: '100%', height: '100%'}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={{uri: "shorturl.at/klDKL"}}
                style={{width: '100%', height: '100%'}}/>
        </View>
      </ImageBackground>
    );
  }
  
  function HomeScreen({ navigation }) {
    return (
      <ImageBackground source={{uri:'shorturl.at/bvRU6'}} 
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
        <SettingsStack.Screen name="Lab 2 - Circle" component={Lab2} />
      </SettingsStack.Navigator>
    );
  }
  
  function TodoStackScreen() {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Lab 3 - To do List" component={Lab3} />
      </SettingsStack.Navigator>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  export default function BottomTabNavigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Circle" component={SettingsStackScreen} />
          <Tab.Screen name="To do" component={TodoStackScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

export default BottomTabRouter