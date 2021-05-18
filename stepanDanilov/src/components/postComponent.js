import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    item: {
        flex: 1,
        minHeight: 200,
        borderRadius: 20,
        margin: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    }
})

const PostComponent = ({ text, title }) => {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => { }}
        >
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default PostComponent