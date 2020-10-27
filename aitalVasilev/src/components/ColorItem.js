import React from 'react'
import {
    List,
    withTheme
} from 'react-native-paper'
// styling
import styles from '../styles/styles'
// Custom components
import ColorCircle from '../components/ColorCircle'

const ColorItem = (props) => {
    const colors =
        props.colorName == 'primary'
            ? [
                  props.theme.colors
                      .primaryGradient1,
                  props.theme.colors
                      .primaryGradient2
              ]
            : [
                  props.theme.colors
                      .secondaryGradient1,
                  props.theme.colors
                      .secondaryGradient2
              ]

    return (
        <List.Item
            style={styles.colorCard}
            title={props.colorText}
            left={() => (
                <ColorCircle colors={colors} />
            )}
        />
    )
}
export default withTheme(ColorItem)
