import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import Lab2 from './src/screens/lab2'
import Lab3 from './src/screens/lab3'
import colors from './src/styles/colors'
import styles from './src/styles/styles';

const Tab = createBottomTabNavigator();
const Lab2Stack = createStackNavigator();
const Lab3Stack = createStackNavigator();

const Lab2StackScreen = () => {
  return (
    <Lab2Stack.Navigator>
      <Lab2Stack.Screen
        name="Lab2"
        component={Lab2}
        options={{
          headerTitleAlign: 'center',
          title: 'Lab 2',
          headerBackground: () => (
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[colors.gradientPink1, colors.gradientPink2]}
              style={{ flex: 1 }}
            />
          ),
          headerTintColor: colors.sweetBlue,
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
          headerTitleAlign: 'center',
          title: 'Lab 3',
          headerBackground: () => (
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[colors.gradientPink1, colors.gradientPink2]}
              style={{ flex: 1 }}
            />
          ),
          headerTintColor: colors.sweetBlue,
          headerTitleStyle: {
            fontSize: 28,
          }
        }}
      />
    </Lab3Stack.Navigator>
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
                'view-agenda',
                size = 30
            }
            if (
              route.name === 'Lab3'
            ) {
              iconName =
                'assignment-turned-in',
                size = 30
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
          activeTintColor: colors.sweetPink,
          inactiveTintColor: colors.grey,
          style: {
            height: 60
          },
          tabStyle: {
            backgroundColor: '#8AC1F4B3',
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
            tabBarLabel: 'Lab 2',
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
export default App;