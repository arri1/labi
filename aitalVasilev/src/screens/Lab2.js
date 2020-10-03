import React, { useState } from 'react'
import { View, Button } from 'react-native'
// styling
import styles from '../styles/styles'

const Lab2 = () => {
    const [colorState, setColorState] = useState(
        'white'
    )

    onGreenButton = () => {
        setColorState('green')
    }
    onRedButton = () => {
        setColorState('red')
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    ...styles.testView,
                    backgroundColor: colorState
                }}
            />
            <Button
                title="Make color red"
                color="red"
                onPress={onRedButton}
            />
            <Button
                title="Make color green"
                color="green"
                onPress={onGreenButton}
            />
        </View>
    )
}

export default Lab2
