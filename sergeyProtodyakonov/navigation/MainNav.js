import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lab2 from '../screens/Lab2'
import Lab3 from '../screens/Lab3'


const Tab = createBottomTabNavigator();

const MainNavigation = () => {

    return (

        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Lab2" component={Lab2} />
            <Tab.Screen name="Lab3" component={Lab3} />
          </Tab.Navigator>
        </NavigationContainer>
    
      );

}

export default MainNavigation