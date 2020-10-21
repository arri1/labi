import React, { useState } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { List } from 'react-native-paper'
// styling
import styles from '../styles/styles'

const Lab2 = () => {
    const [colorState, setColorState] = useState(
        'white'
    )

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
            colors={['#8DBBFF', '#FF75A7']}
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
                <List.Item
                    style={{
                        justifyContent: 'center',
                        height: 80,
                        width: '100%',
                        backgroundColor: 'white',
                        margin: 10,
                        borderRadius: 15
                    }}
                    title="Основной цвет"
                    left={(props) => (
                        <List.Icon
                            {...props}
                            icon="folder"
                        />
                    )}
                />
                <List.Item />
                <List.Item
                    style={{
                        justifyContent: 'center',
                        height: 80,
                        width: '100%',
                        backgroundColor: 'white',
                        margin: 10,
                        borderRadius: 15
                    }}
                    title="Второстепенный цвет"
                    left={(props) => (
                        <List.Icon
                            {...props}
                            icon="folder"
                        />
                    )}
                />
                {/* <Button
                    title="Make color red"
                    color="red"
                    style={{width: "100%"}}
                    onPress={onRedButton}
                />
                <Button
                    title="Make color green"
                    color="green"
                    onPress={onGreenButton}
                /> */}
            </View>
        </LinearGradient>
    )
}

export default Lab2
