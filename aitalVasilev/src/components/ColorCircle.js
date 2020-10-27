import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-community/masked-view'
// styling
import styles from '../styles/styles'

const ColorCircle = (props) => {
    return (
        <MaskedView
            style={styles.colorCircleMask}
            maskElement={
                <View
                    style={{
                        backgroundColor:
                            'transparent'
                    }}
                >
                    <View
                        style={styles.colorCircle}
                    />
                </View>
            }
        >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={props.colors}
                style={{ flex: 1 }}
            />
        </MaskedView>
    )
}
export default ColorCircle
