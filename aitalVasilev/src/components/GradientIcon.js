import React, { useContext } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-community/masked-view'
// Icons
import Icon from 'react-native-vector-icons/MaterialIcons'
// styling
import styles from '../styles/styles'
// Custom components
import { AppContext } from '../styles/DynamicThemeProvider'

const GradientIcon = (props) => {
    const context = useContext(AppContext)
    return (
        <View style={styles.container}>
            <MaskedView
                style={{
                    width: props.size,
                    height: props.size
                }}
                maskElement={
                    <View
                        style={
                            styles.maskContainer
                        }
                    >
                        <Icon
                            name={props.iconName}
                            size={props.size}
                            color={props.color}
                        />
                    </View>
                }
            >
                <LinearGradient
                    start={{
                        x: 0,
                        y: 0
                    }}
                    end={{
                        x: 1,
                        y: 1
                    }}
                    colors={[
                        context.theme.colors
                            .gradient1,
                        context.theme.colors
                            .gradient2
                    ]}
                    style={{
                        flex: 1
                    }}
                />
            </MaskedView>
        </View>
    )
}
export default GradientIcon
