import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {Dimensions} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import Lab2 from './src/screens/lab2'
import Lab3 from './src/screens/lab3'
import Profile from './src/screens/profile'

import styles from './src/styles/styles';

const {width, height} = Dimensions.get('screen')

const Tab = createBottomTabNavigator();

const Lab2Stack = createStackNavigator();
const Lab3Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Lab2StackScreen = () => {
    return (
        <Lab2Stack.Navigator>
            <Lab2Stack.Screen
                name="Lab2"
                component={Lab2}
                options={{
                    title: 'ЛАБ 2 - Менять цвет БГ',
                    headerTitleAlign: 'center',
                    headerTintColor: '#29AB87',
                    headerTitleStyle: {
                        fontSize: 28,
                    }
                }}
            />
        </Lab2Stack.Navigator>
    )
}

const Lab3StackScreen = () => {
    return (
        <Lab3Stack.Navigator>
            <Lab2Stack.Screen
                name="Lab3"
                component={Lab3}
                options={{
                    title: 'ЛАБ 3 - Список дел',
                    headerTitleAlign: 'center',
                    headerTintColor: '#29AB87',
                    headerTitleStyle: {
                        fontSize: 28,
                    }
                }}
            />
        </Lab3Stack.Navigator>
    )
}

const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'НАСТРОЙКИ',
                    headerTitleAlign: 'center',
                    headerTintColor: '#29AB87',
                    headerTitleStyle: {
                        fontSize: 28,
                    }
                }}
            />
        </ProfileStack.Navigator>
    )
}
const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                     tabBarIcon: ({
                         color,
                         size
                     }) => {
                         let iconName
                        if (
                             route.name === 'Lab2'
                        ) {
                             iconName =
                                'md-color-palette-outline',
                                size = 30
                        }
                        if (
                             route.name === 'Lab3'
                        ) {
                             iconName =
                                'receipt',
                                size = 30
                        }
                        if (
                             route.name === 'Profile'
                        ) {
                             iconName =
                                  'person',
                                  size = 30
                        }
                        return (
                            <IconIonicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                     }
                })}
                tabBarOptions={{
                     inactiveTintColor: 'black',
                     style: {
                        height: 60
                     },
                     tabStyle: {
                        backgroundColor: '#ede6f2',
                     },
                     labelStyle: {
                        fontSize: 14
                     }
                }}
            >
                <Tab.Screen
                    name="Lab2"
                    component={Lab2StackScreen}
                    options={{
                         tabBarLabel:
                            'ЛАБ 2'
                    }}
                />
                <Tab.Screen
                    name="Lab3"
                    component={Lab3StackScreen}
                    options={{
                         tabBarLabel:
                            'ЛАБ 3'
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileStackScreen}
                    options={{
                         tabBarLabel:
                             'ПРОФИЛЬ'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default App;
