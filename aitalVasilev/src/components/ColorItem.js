import React from 'react'
import { List } from 'react-native-paper'
// styling
import styles from '../styles/styles'
import {
    themePrimary,
    themeSecondary
} from '../styles/theme'
// Custom components
import ColorCircle from '../components/ColorCircle'
import { AppConsumer } from '../styles/DynamicThemeProvider'

const ColorItem = (props) => {
    let theme
    switch (props.colorName) {
        case 'primary':
            theme = themePrimary
            break
        case 'secondary':
            theme = themeSecondary
            break
        default:
            theme = themePrimary
    }
    const colors = [
        theme.colors.gradient1,
        theme.colors.gradient2
    ]

    return (
        <AppConsumer>
            {(appConsumer) => (
                <List.Item
                    style={{
                        ...styles.colorCard,
                        backgroundColor:
                            theme.colors.cardColor
                    }}
                    titleStyle={{
                        color:
                            theme.colors
                                .textColor,
                        fontFamily:
                            'Lora-Regular',
                        fontSize: 18,
                        fontWeight: '400'
                    }}
                    title={props.colorText}
                    onPress={() => {
                        appConsumer.updateTheme(
                            theme
                        )
                    }}
                    left={() => (
                        <ColorCircle
                            colors={colors}
                        />
                    )}
                />
            )}
        </AppConsumer>
    )
}
export default ColorItem
