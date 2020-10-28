import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
// Custom components
import { AppContext } from '../styles/DynamicThemeProvider'

const GradientBackground = ({ children }) => {
    const context = useContext(AppContext)
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[
                context.theme.colors.gradient1,
                context.theme.colors.gradient2
            ]}
            style={{ flex: 1 }}
        >
            {children}
        </LinearGradient>
    )
}
export default GradientBackground
