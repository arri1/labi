import React from 'react'
import { View } from 'react-native'
// styling
import styles from '../styles/styles'
// Custom components
import ColorItem from '../components/ColorItem'
import GradientBackground from '../components/GradientBackground'

const Lab2 = () => {
    return (
        <GradientBackground>
            <View
                style={styles.colorItemsContainer}
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
        </GradientBackground>
    )
}

export default Lab2
