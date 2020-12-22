import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PostFeed from '../screens/PostFeed'
import AddPost from '../screens/AddPost'

const Stack = createStackNavigator()

const FeedNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'PostFeed'}
                component={PostFeed}
            />
            <Stack.Screen
                name={'AddPost'}
                component={AddPost}
            />
        </Stack.Navigator>
    )
}
export default FeedNavigation
