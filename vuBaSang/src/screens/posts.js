import React, { useState, useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useQuery } from '@apollo/client'
import { FIND_MANY_POST } from '../gqls/post/queries'
import LoadingBar from '../components/loadingBar'
import PostComponent from '../components/postComponent'
import styles from '../styles/styles'

const Posts = ({ navigation }) => {
    useEffect(() => {}, [])
    const { data, loading, refetch } = useQuery(FIND_MANY_POST)
    const [refreshing, setRefreshing] = useState(
        false
    )
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        try {
            refetch()
            setRefreshing(false)
        } catch (error) {
            console.error(error)
        }
    }, [refreshing])
    const normalizeData = data && data.findManyPost ? data.findManyPost : []

    if (loading)
        return (
            <LoadingBar />
        )
    return (
            <View style={styles.containerPosts}>
                <View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    style={
                        {
                            marginTop: 10,
                            marginBottom: 66
                        }
                    }
                >
                    {
                        normalizeData.slice(0).reverse().map(
                            (item) => {
                                return (
                                    <PostComponent
                                        key={item.id}
                                        userName={item.user.name}
                                        title={item.title}
                                        text={item.text}
                                    />
                                )
                            })
                    }
                </ScrollView>
                </View>
                <View
                    style={
                        {
                            alignItems: 'center',
                            position: 'absolute',
                            top: '90.5%',
                            width: '100%'
                        }
                    }
                >
                    <Button
                        color={'#12A7E7'}
                        mode="contained"
                        labelStyle={{
                            color: 'white'
                        }}
                        style={{ elevation: 5 }}
                        onPress={
                            () => {
                                navigation.push('AddPost')
                            }
                        }
                    >
                        Добавить пост
                    </Button>
                </View>
            </View>
    )
}

export default Posts