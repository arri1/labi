import React from 'react'
import { View, Text } from 'react-native'

const Item = (props) => {
    const title = props.title
    const text = props.text

    return (
        <View>
            <Text style={{backgroundColor:'red'}}>{title}</Text>
            <Text>{text}</Text>
        </View>
    )
}
export default Item
