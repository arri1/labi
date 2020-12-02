import React, { useContext } from 'react'
import { Text } from 'react-native'
// Icons
import Icon from 'react-native-vector-icons/MaterialIcons'
// React navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
// styling
import styles from '../styles/styles'
// Custom components
import GradientIcon from '../components/GradientIcon'
import Lab2 from '../screens/Lab2'
import Lab3 from '../screens/Lab3'
import Profile from '../screens/Profile'
import { AppContext } from '../styles/DynamicThemeProvider'

const Lab2Stack = createStackNavigator()
const Lab2StackScreen = () => {
    const context = useContext(AppContext)
    return (
        <Lab2Stack.Navigator>
            <Lab2Stack.Screen
                name="Lab2"
                component={Lab2}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        ...styles.navHearder,
                        backgroundColor:
                            context.theme.colors
                                .barColor
                    },
                    headerTitle: (
                        <Text
                            style={{
                                ...styles.navHeaderTitle,
                                color:
                                    context.theme
                                        .colors
                                        .textColor
                            }}
                        >
                            Тема приложения
                        </Text>
                    )
                }}
            />
        </Lab2Stack.Navigator>
    )
}

const Lab3Stack = createStackNavigator()
const Lab3StackScreen = () => {
    const context = useContext(AppContext)
    return (
        <Lab3Stack.Navigator>
            <Lab3Stack.Screen
                name="Lab3"
                component={Lab3}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        ...styles.navHearder,
                        backgroundColor:
                            context.theme.colors
                                .barColor
                    },
                    headerTitle: (
                        <Text
                            style={{
                                ...styles.navHeaderTitle,
                                color:
                                    context.theme
                                        .colors
                                        .textColor
                            }}
                        >
                            Список дел
                        </Text>
                    )
                }}
            />
        </Lab3Stack.Navigator>
    )
}

const ProfileStack = createStackNavigator()
const ProfileStackScreen = () => {
    const context = useContext(AppContext)
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
        </ProfileStack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

const MainNavigation = () => {
    const context = useContext(AppContext)

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({
                    color,
                    focused
                }) => {
                    let iconName

                    if (route.name === 'Lab2') {
                        iconName = 'color-lens'
                    }
                    if (route.name === 'Lab3') {
                        iconName = 'assignment'
                    }
                    if (
                        route.name === 'Profile'
                    ) {
                        iconName =
                            'account-circle'
                    }

                    return focused ? (
                        <GradientIcon
                            iconName={iconName}
                            size={28}
                            color={color}
                        />
                    ) : (
                        <Icon
                            name={iconName}
                            size={28}
                            color="grey"
                        />
                    )
                }
            })}
            tabBarOptions={{
                activeTintColor:
                    context.theme.colors
                        .textColor,
                inactiveTintColor: 'grey',
                style: styles.navTabBar,
                tabStyle: {
                    backgroundColor:
                        context.theme.colors
                            .barColor
                },
                labelStyle: {
                    ...styles.navTabLabel,
                    color:
                        context.theme.colors
                            .textColor
                }
            }}
            initialRouteName="Lab2"
        >
            <Tab.Screen
                name="Lab2"
                component={Lab2StackScreen}
                options={{
                    tabBarLabel: 'Цвет приложения'
                }}
            />
            <Tab.Screen
                name="Lab3"
                component={Lab3StackScreen}
                options={{
                    tabBarLabel: 'Список дел'
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Профиль'
                }}
            />
        </Tab.Navigator>
    )
}

export default MainNavigation
