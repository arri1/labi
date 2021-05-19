import React, { useContext } from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
// styling
import styles from '../styles/styles'
// Custom components
import { AppContext } from '../styles/DynamicThemeProvider'

const CustomTextButton = (props) => {
    const context = useContext(AppContext)
    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
        >
            <Text
                style={{
                    ...styles.smallTextButton,
                    color:
                        context.theme.colors
                            .textColor
                }}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomTextButton
