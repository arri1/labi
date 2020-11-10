import React, { useState } from 'react'
import { Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
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
        <Image
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}
            source={{
                uri: imgUri
            }}
        />
    )
}

export default ChangeBackground
