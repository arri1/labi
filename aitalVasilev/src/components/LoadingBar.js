import React, { useContext } from 'react'
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native'
// styling
import styles from '../styles/styles'
// Custom components
import { AppContext } from '../styles/DynamicThemeProvider'

const LoadingBar = () => {
    const context = useContext(AppContext)
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor:
                    context.theme.colors.barColor
            }}
        >
            <ActivityIndicator
                size={64}
                color={
                    context.theme.colors.textColor
                }
            />
            <Text
                style={{
                    ...styles.loadingText,
                    color:
                        context.theme.colors
                            .textColor
                }}
            >
                Загрузка...
            </Text>
        </View>
    )
}

export default LoadingBar
