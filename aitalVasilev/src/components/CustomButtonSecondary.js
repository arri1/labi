import React, { useContext } from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
// styling
import styles from '../styles/styles'
// Custom components
import { AppContext } from '../styles/DynamicThemeProvider'

const CustomButtonSecondary = (props) => {
    const context = useContext(AppContext)
    return (
        <TouchableOpacity
            onPress={() => {
                props.onPress()
            }}
            style={{
                ...styles.button,
                backgroundColor: 'transparent',
                borderColor:
                    context.theme.colors.negative,
                borderWidth: 2
            }}
        >
            <Text
                style={{
                    ...styles.buttonText,
                    color:
                        context.theme.colors
                            .negative
                }}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}
export default CustomButtonSecondary
