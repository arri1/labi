import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Lab2 from '../screens/Lab2'
import Lab3 from '../screens/Lab3'
import Settings from '../screens/Settings'


const Tab = createBottomTabNavigator();

const MainNav = () => {

    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                      let iconName;
          
                      if (route.name === 'Lab2') {
                        iconName = 'grid-sharp';
                      } else if (route.name === 'Lab3') {
                        iconName = 'document-sharp';
                      } else if (route.name === 'Settings') {
                        iconName = 'cog-sharp';
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

export default MainNav