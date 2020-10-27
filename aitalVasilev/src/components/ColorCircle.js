import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-community/masked-view'

const ColorCircle = (props) => {
    return (
        <MaskedView
            style={{
                width: 44,
                height: 44
            }}
            maskElement={
                <View
                    style={{
                        backgroundColor:
                            'transparent'
                    }}
                >
                    <View
                        style={{
                            width: 44,
                            height: 44,
                            borderRadius: 50,
                            backgroundColor:
                                'black'
                        }}
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
