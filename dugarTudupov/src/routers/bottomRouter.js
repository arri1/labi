import React from 'react';
import 'react-native-gesture-handler';
import { Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import Lab2 from '../screens/lab2'
import Lab3 from '../screens/lab3'
import Profile from '../screens/profile'
import styles from '../styles/styles'

const Tab = createBottomTabNavigator();

const Lab2Stack = createStackNavigator();
const Lab3Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Lab2StackScreen = () => {
    return(
      <Lab2Stack.Navigator>
        <Lab2Stack.Screen name="Lab2" component={Lab2}
          options={{
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#181818',
            height: 75
          },
          headerTitle:(
            <Text
            style={{
              ...styles.navHeaderTitle,
              color:"white"
            }}>
              Выбор заднего фона
            </Text>
          )
          }}/>
      </Lab2Stack.Navigator>
    )
  }

const Lab3StackScreen = () => {
    return(
        <Lab3Stack.Navigator>
          <Lab3Stack.Screen name="Lab3" component={Lab3}
            options={{
            headerTitleAlign:'center',
            headerStyle:{
              backgroundColor:'#181818',
              height: 75
            },
            headerTitle:(
              <Text
              style={{
                ...styles.navHeaderTitle,
                color:"white"
              }}>
                Список
              </Text>
            )
            }}/>
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
                    title: 'Настройки профиля',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 28,
                    },
                    headerStyle:{
                        backgroundColor:'#181818',
                        height: 75
                      },
                }}
            />
        </ProfileStack.Navigator>
    )
}

const BottomRouter = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({
                    color,
                    size
                }) => {
                    let iconName
                    if (
                        route.name === 'Lab2'
                    ){
                        iconName =
                            'md-color-palette-outline',
                            size = 30
                    }
                    if (
                        route.name === 'Lab3'
                    ){
                        iconName =
                            'receipt',
                            size = 30
                    }
                    if (
                        route.name === 'Profile'
                    ){
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
                inactiveTintColor: 'white',
                style: {
                    height: 159
                },
                    tabStyle: {
                        backgroundColor:"#181818",
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
                    tabBarLabel: 'Выбор фона'
                  }}
            />
            <Tab.Screen
                name="Lab3"
                component={Lab3StackScreen}
                options={{
                    tabBarLabel: 'Список'
                  }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel:
                        'Профиль'
                }}
            />
        </Tab.Navigator>
    )
}
export default BottomRouter
