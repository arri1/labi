import React, {useState} from 'react'
import {Button, StyleSheet, TextInput, View} from "react-native"

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    }
})

const Login = ({navigation}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={text => setLogin(text)}
                value={login}
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                style={{marginTop: 24}}
            />
            <Button
                title={'Войти'}
                style={{marginTop: 24}}
                onPress={() => {
                    navigation.replace('BottomRouter')
                }}
            />
            <Button
                title={'Регистрация'}
                style={{paddingTop: 24}}
                onPress={() => {
                    navigation.push('Registration')
                }}
            />
        </View>
    )
}
export default Login
