import React from 'react'
import { ScrollView, View } from 'react-native'
import { useQuery } from '@apollo/client'
import { FIND_MANY_POST } from '../apollo/gql/post/queries'
import styles from '../styles/styles'
// Custom components
import CustomButtonPrimary from '../components/CustomButtonPrimary'
import LoadingBar from '../components/LoadingBar'
import PostItem from '../components/PostItem'
import ChangingBackground from '../components/ChangingBackground'

const PostFeed = ({ navigation }) => {
    const { data, loading } = useQuery(
        FIND_MANY_POST
    )

    const normalizeData =
        data && data.findManyPost
            ? data.findManyPost
            : []
    console.log('data', [data])
    console.log('normalizedData', normalizeData)
    //    console.log('user', [data, normalizeData])

    if (loading) return <LoadingBar />
    return (
        <View style={styles.container}>
            <ChangingBackground />
            <ScrollView style={styles.scroll}>
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
