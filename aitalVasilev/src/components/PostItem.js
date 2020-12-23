import React, { useContext } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
// React paper
import { Avatar } from 'react-native-paper'
// styling
import styles from '../styles/styles'
// Custom components
import { AppContext } from '../styles/DynamicThemeProvider'
// util
import {
    getFirstLetter,
    randomColor
} from '../util/scripts'

const PostItem = ({ username, text, title }) => {
    const context = useContext(AppContext)

    return (
        <TouchableOpacity
            style={{
                ...styles.postItem,
                backgroundColor:
                    context.theme.colors.barColor
            }}
            onPress={() => {}}
        >
            <View style={styles.rowContainer}>
                <View
                    style={{
                        padding: 5
                    }}
                >
                    <Avatar.Text
                        size={40}
                        label={getFirstLetter(
                            username
                        )}
                        labelStyle={
                            styles.avatarText
                        }
                        style={{
                            backgroundColor: randomColor(
                                username
                            )
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        padding: 5
                    }}
                >
                    <Text
                        style={{
                            ...styles.postUsernameText,
                            color:
                                context.theme
                                    .colors
                                    .textColor
                        }}
                    >
                        {username}
                    </Text>
                    <Text
                        style={{
                            ...styles.postTitleText,
                            color:
                                context.theme
                                    .colors
                                    .textColor
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            ...styles.postBodyText,
                            color:
                                context.theme
                                    .colors.grey
                        }}
                    >
                        {text}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PostItem
