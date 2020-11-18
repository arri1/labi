import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
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
        </View>
    )
}

export default ChangeBackground
