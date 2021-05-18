import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from "react-native"

const styles = StyleSheet.create({
    item: {
        flex: 1,
        minHeight: 200,
        borderRadius: 20,
        margin: 24,
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
                {item.backgroundColor}
            </Text>
        </TouchableOpacity>
    )
}

export default Item