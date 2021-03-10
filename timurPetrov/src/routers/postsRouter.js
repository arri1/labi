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
                component={Posts} />
            <Stack.Screen
                name={'AddPost'}
                component={AddPost} />
        </Stack.Navigator>
    )
}
export default PostsRouter