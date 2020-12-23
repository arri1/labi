import React, { useContext } from 'react'
import { Text } from 'react-native'
// React navigation
import { createStackNavigator } from '@react-navigation/stack'
// styling
import styles from '../styles/styles'
// Custom components
import PostFeed from '../screens/PostFeed'
import AddPost from '../screens/AddPost'
import { AppContext } from '../styles/DynamicThemeProvider'

const Stack = createStackNavigator()

const FeedNavigation = () => {
    const context = useContext(AppContext)
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Lab6"
                component={PostFeed}
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
                            Список постов
                        </Text>
                    ),
                    headerTintColor:
                        context.theme.colors
                            .textColor
                }}
            />
            <Stack.Screen
                name={'AddPost'}
                component={AddPost}
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
                            Добавить пост
                        </Text>
                    ),
                    headerTintColor:
                        context.theme.colors
                            .textColor
                }}
            />
        </Stack.Navigator>
    )
}
export default FeedNavigation
