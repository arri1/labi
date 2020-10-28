import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from "react-native"

const styles = StyleSheet.create({
    item: {
        flex: 2,
        minHeight: 220,
        borderRadius: 25,
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Item = (props) => {
    const {setBackgroundColor, backgroundColor,item} = props
    return (
        <TouchableOpacity
            style={[styles.item, {backgroundColor}]}
            onPress={() => {
                setBackgroundColor(item.backgroundColor)
            }}
        >
            <Text style={{color: item.backgroundColor}}>
                {'Становятся ' + item.backgroundColor}
            </Text>
        </TouchableOpacity>
    )
}
export default Item
