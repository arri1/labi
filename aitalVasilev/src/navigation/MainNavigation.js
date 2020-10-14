import React from 'react'
// React navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// Custom components
import Lab2 from '../screens/Lab2'
import Lab3 from '../screens/Lab3'

const Lab2Stack = createStackNavigator()
const Lab2StackScreen = () => {
    return (
        <Lab2Stack.Navigator>
            <Lab2Stack.Screen
                name="Lab2"
                component={Lab2}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Lab 2 (useState hook)'
                }}
            />
        </Lab2Stack.Navigator>
    )
}

const Lab3Stack = createStackNavigator()
const Lab3StackScreen = () => {
    return (
        <Lab3Stack.Navigator>
            <Lab3Stack.Screen
                name="Lab3"
                component={Lab3}
                options={{
                    headerTitleAlign: 'center',
                    title:
                        'Lab 3 (useEffect, navigation, axios)'
                }}
            />
        </Lab3Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({
                        focused,
                        color,
                        size
                    }) => {
                        let iconName

                        if (
                            route.name === 'Lab2'
                        ) {
                            iconName = focused
                                ? 'numeric-2-circle'
                                : 'numeric-2-circle-outline'
                        }
                        if (
                            route.name === 'Lab3'
                        ) {
                            iconName = focused
                                ? 'numeric-3-circle'
                                : 'numeric-3-circle-outline'
                        }

                        return (
                            <Icon
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'green',
                    inactiveTintColor: 'grey'
                }}
            >
                <Tab.Screen
                    name="Lab2"
                    component={Lab2StackScreen}
                    options={{
                        tabBarLabel: 'Lab 2'
                    }}
                />
                <Tab.Screen
                    name="Lab3"
                    component={Lab3StackScreen}
                    options={{
                        tabBarLabel: 'Lab 3'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation
