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
    const [backgroundColor, setbackgroundColor] = useState('red')
    return (
        <View style={styles.container, { backgroundColor }}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (backgroundColor === 'red') {
                        setbackgroundColor('green')
                        return null
                    }
                    setbackgroundColor('red')
                }}
            ></TouchableOpacity>
        </View>
    )
}

export default Lab2