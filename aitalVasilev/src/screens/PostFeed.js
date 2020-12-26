import React, {
    useState,
    useCallback,
    useEffect
} from 'react'
import {
    ScrollView,
    View,
    RefreshControl
} from 'react-native'
import { useQuery } from '@apollo/client'
import { FIND_MANY_POST } from '../apollo/gql/post/queries'
import styles from '../styles/styles'
// Custom components
import CustomButtonPrimary from '../components/CustomButtonPrimary'
import LoadingBar from '../components/LoadingBar'
import PostItem from '../components/PostItem'
import ChangingBackground from '../components/ChangingBackground'

const PostFeed = ({ navigation }) => {
    useEffect(() => {}, [])

    const [refreshing, setRefreshing] = useState(
        false
    )
    const { data, loading, refetch } = useQuery(
        FIND_MANY_POST
    )
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        try {
            refetch()
            setRefreshing(false)
        } catch (error) {}
    }, [refreshing])

    const normalizeData =
        data && data.findManyPost
            ? data.findManyPost
            : []

    const posts = () => {
        return !loading ? (
            <ScrollView
                style={styles.scroll}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {normalizeData
                    .slice(0)
                    .reverse()
                    .map((item) => {
                        return (
                            <PostItem
                                key={item.id}
                                title={item.title}
                                text={item.text}
                                username={
                                    item.user.name
                                }
                            />
                        )
                    })}
            </ScrollView>
        ) : (
            <LoadingBar />
        )
    }

    return (
        <View style={styles.container}>
            <ChangingBackground />
            {posts()}
            <View
                style={styles.bottomButtonWrapper}
            >
                <CustomButtonPrimary
                    text={'Добавить пост'}
                    onPress={() => {
                        navigation.push('AddPost')
                    }}
                />
            </View>
        </View>
    )
}

export default PostFeed
