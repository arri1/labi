import React, { useState } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { List, Avatar } from 'react-native-paper'
// styling
import styles from '../styles/styles'
// Custom components
import ColorItem from '../components/ColorItem'

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
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#8DBBFF', '#FF75A7']}
            style={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    padding: 10
                }}
            >
                <ColorItem
                    colorName="primary"
                    colorText="Основной цвет"
                />
                <ColorItem
                    colorName="secondary"
                    colorText="Второстепенный цвет"
                />
            </View>
        </LinearGradient>
    )
}

export default Lab2
