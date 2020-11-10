import React from 'react'
import { View } from 'react-native'
// styling
import styles from '../styles/styles'
// Custom components
import ColorItem from '../components/ColorItem'
import ChangingBackground from '../components/ChangingBackground'

const Lab2 = () => {
    return (
        <View style={{ flex: 1 }}>
            <ChangingBackground />
            <View
                style={{
                    ...styles.colorItemsContainer,
                    backgroundColor: 'transparent'
                }}
            >
                <ColorItem
                    colorName="primary"
                    colorText="Тёмная тема"
                />
                <ColorItem
                    colorName="secondary"
                    colorText="Светлая тема"
                />
            </View>
        </View>
    )
}

export default Lab2
