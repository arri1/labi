import React, { useContext } from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
// styling
import styles from '../styles/styles'
// Custom components
import { AppContext } from '../styles/DynamicThemeProvider'

const CustomButtonPrimary = (props) => {
    const context = useContext(AppContext)
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[
                context.theme.colors.gradient1,
                context.theme.colors.gradient2
            ]}
            style={{
                ...styles.button,
                elevation: 5
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    props.onPress()
                }}
                style={styles.container}
            >
                <Text
                    style={{
                        ...styles.buttonText,
                        color: 'white'
                    }}
                >
                    {props.text}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
export default CustomButtonPrimary
