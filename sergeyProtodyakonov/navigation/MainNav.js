import React from 'react';

import Image from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lab2 from '../screens/Lab2'
import Lab3 from '../screens/Lab3'


const Tab = createBottomTabNavigator();

const MainNavigation = () => {

    return (

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: (focused, tintColor) => {
                      
          
                      if (route.name === 'Lab2') {
                        <Image style={{ width: 50, height: 50 }} 
                          source={require('./../resources/icons/note1.png')} />
                      } else if (route.name === 'Lab3') {
                        
                      }
                      
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
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
            </Tab.Navigator>
        </NavigationContainer>
    
      );

}

export default MainNavigation