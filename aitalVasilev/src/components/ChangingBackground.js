import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { BlurView } from '@react-native-community/blur'
// other
import { randomString } from '../util/scripts'

const ChangeBackground = () => {
    const [imgUri, setImgUri] = useState(
        'https://picsum.photos/seed/' +
            randomString(10) +
            '/360/740?grayscale'
    )

    useFocusEffect(
        React.useCallback(() => {
            return () =>
                setImgUri(
                    'https://picsum.photos/seed/' +
                        randomString(10) +
                        '/360/740?grayscale'
                )
        }, [])
    )

    return (
        <View
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}
        >
            <Image
                style={{
                    flex: 1
                }}
                source={{
                    uri: imgUri
                }}
            />
            <BlurView
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }}
                blurAmount={5}
                blurType="light"
                reducedTransparencyFallbackColor="transparent"
            />
        </View>
    )
}

export default ChangeBackground
