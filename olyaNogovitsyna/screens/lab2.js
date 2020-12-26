import React, { useState } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native'

const styles = StyleSheet.create({
    button: {
<<<<<<< HEAD
        width: "100%",
        height: "100%",
        justifyContent: 'center',
=======
        justifyContent: 'center',
        width: "100%",
        height: "100%",
>>>>>>> 37baa313212319fa4199cf361d6310b35527bd0d
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