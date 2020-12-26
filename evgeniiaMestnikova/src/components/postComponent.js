import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import styles from '../styles/styles'
import colors from '../styles/colors'

const getFirstLetter = (text) => {
    if (text) return text[0]
}

const PostComponent = ({ userName, title, text }) => {
    return (
        <TouchableOpacity
            style={styles.itemPostComponent}
            onPress={() => { }}
        >
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ padding: 5 }}>
                    <Avatar.Text
                        color={colors.white}
                        size={35}
                        style={{ backgroundColor: colors.sweetPink }}
                        label={getFirstLetter(userName)} />
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                        {userName}
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        {title}
                    </Text>
                    <Text style={{ fontSize: 14, color: 'grey' }}>
                        {text}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PostComponent