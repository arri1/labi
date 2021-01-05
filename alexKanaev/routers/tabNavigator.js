import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from "../screens/home";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab4 from "../screens/Lab4";
import Settings from "../screens/settings";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HOME') {
                        iconName = 'home-filled';
                    } else if (route.name === 'Lab 2' || route.name === 'Lab 3' || route.name === 'Lab 4') {
                        iconName = 'format-list-bulleted';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings'
                    }
                    color = focused ? '#fff' : '#dcdcdc';
                    size = focused ? 25 : 22;

                    return <MaterialIcons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#757575',
                    borderTopWidth: 0.5,
                    borderTopColor: '#757575'
                },
                labelStyle: {
                    fontSize: 13,
                    fontFamily: 'times new roman',
                    fontWeight: 'bold'
                },
                tabStyle: {
                    justifyContent: 'center'
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#dcdcdc'
            }}
        >
            <Tab.Screen name='HOME' component={Home} />
            <Tab.Screen name='Lab 2' component={Lab2} />
            <Tab.Screen name='Lab 3' component={Lab3} />
            <Tab.Screen name='Lab 4' component={Lab4} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
};

export default TabNavigator;