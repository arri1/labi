import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24
    },
    container: {
        flex: 1,
        margin: 15
    }
})

const Settings = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Настройки</Text>
            <View
                style={
                    {
                        marginTop:24,
                        alignItems:'center'
                    }
                }
            >
                <Button
                    title={'Сохранить'}
                    onPress={
                        () => {
                            navigation.replace('Login')
                        }
                    }
                />
            </View>
            <View
                style={
                    {
                        marginTop:24,
                        alignItems:'center'
                    }
                }
            >
                <Button
                    title={'Выйти'}
                    onPress={
                        () => {
                            navigation.replace('Login')
                        }
                    }
                />
            </View>
        </View>
    )
}
export default Settings
