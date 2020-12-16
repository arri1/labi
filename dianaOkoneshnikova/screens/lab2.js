import React, { useState } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
    }
})

const Lab2 = () => {
    const [backgroundColor, setbackgroundColor] = useState('pink')
    return (
        <View style={styles.container, { backgroundColor }}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (backgroundColor === 'pink') {
                        setbackgroundColor('purple')
                        return null
                    }
                    setbackgroundColor('pink')
                }}
            ></TouchableOpacity>
        </View>
    )
}

export default Lab2