import React, { useState, useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native'
import { Button } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { useQuery } from '@apollo/client'
import { FIND_MANY_POST } from '../gqls/post/queries'
import LoadingBar from '../components/loadingBar'
import PostComponent from '../components/postComponent'
import styles from '../styles/styles'
import colors from '../styles/colors'

const Posts = ({ navigation }) => {
    useEffect(() => {
        console.log('USE EFFECT')
    }, [])
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
    console.log('test', [data, normalizeData])
    if (loading)
        return (
            <LoadingBar />
        )
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[
                colors.gradient1,
                colors.gradient2
            ]}
            style={{ flex: 1 }}
        >
            <View style={styles.containerPosts}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    style={
                        {
                            marginTop: 24
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
                        top: '90%',
                        width: '100%'
                    }
                }
            >
                <Button
                    color={colors.sweetPink}
                    mode="contained"
                    labelStyle={{
                        color: colors.white
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
        </LinearGradient>
    )
}

export default Posts