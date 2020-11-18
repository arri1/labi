import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { BlurView } from '@react-native-community/blur'
// styling
import styles from '../styles/styles'
// other
import { randomImage } from '../util/scripts'

const ChangeBackground = () => {
    const [imgUri, setImgUri] = useState(() =>
        randomImage(10)
    )

    useFocusEffect(
        React.useCallback(() => {
            return () =>
                setImgUri(() => randomImage(10))
        }, [])
    )

    return (
        <View style={styles.backgroundContainer}>
            <Image
                style={{
                    flex: 1
                }}
                source={{
                    uri: imgUri
                }}
            />
            <BlurView
                style={styles.backgroundContainer}
                blurAmount={1}
                blurType="light"
                reducedTransparencyFallbackColor="transparent"
            />
        </View>
    )
}

export default ChangeBackground
