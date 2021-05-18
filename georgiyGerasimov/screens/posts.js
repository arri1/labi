import React from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native'
import {useQuery} from '@apollo/react-hooks'
import {FIND_MANY_POST} from '../gqls/post/queries'
import LoadingBar from '../components/loadingBar'
import PostComponent from '../components/postComponent'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

})
const Posts = ({navigation}) => {
    const {data, loading} = useQuery(FIND_MANY_POST)

    const normalizeData = data && data.findManyPost ? data.findManyPost : []
    console.log('test', [data, normalizeData])
    if (loading)
        return (
            <LoadingBar/>
        )
    return (
        <View style={styles.container}>
            <Button
                title={'Добавить пост'}
                onPress={
                    () => {
                        navigation.push('AddPost')
                    }
                }
            />
            <ScrollView
                style={
                    {
                        marginTop: 24
                    }
                }
            >
                {
                    normalizeData.map(
                        (item) => {
                            return (
                                <PostComponent
                                    key={item.id}
                                    title={item.title}
                                />
                            )
                        })
                }
            </ScrollView>
        </View>
    )
}

export default Posts
