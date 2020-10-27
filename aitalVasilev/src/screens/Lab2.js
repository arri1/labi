import React, {
    useState,
    useContext
} from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { withTheme } from 'react-native-paper'
// styling
import styles from '../styles/styles'
// Custom components
import ColorItem from '../components/ColorItem'
import { AppContext } from '../styles/DynamicThemeProvider'

const Lab2 = () => {
    const [colorState, setColorState] = useState(
        'white'
    )

    const context = useContext(AppContext)

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
            colors={[
                context.theme.colors.gradient1,
                context.theme.colors.gradient2
            ]}
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

export default withTheme(Lab2)
