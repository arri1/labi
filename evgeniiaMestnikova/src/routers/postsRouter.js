import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LinearGradient from 'react-native-linear-gradient'
import Posts from '../screens/posts'
import AddPost from '../screens/addPost'
import colors from '../styles/colors'

const Stack = createStackNavigator()

const PostsRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Posts'}
                component={Posts}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Lab 6',
                    headerBackground: () => (
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
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
            <Stack.Screen
                name={'AddPost'}
                component={AddPost}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Добавить пост',
                    headerBackground: () => (
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
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
        </Stack.Navigator>
    )
}
export default PostsRouter