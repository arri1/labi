import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Posts from '../screens/posts'
import AddPost from '../screens/addPost'

const Stack = createStackNavigator()

const PostsRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Posts'}
                component={Posts}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Посты',
                    headerTintColor: '#29AB87',
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
                    title: 'Добавление поста',
                    headerTintColor: '#29AB87',
                    headerTitleStyle: {
                        fontSize: 28,
                    }
                }}
            />
        </Stack.Navigator>
    )
}
export default PostsRouter