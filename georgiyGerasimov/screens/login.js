import React, {useState} from 'react'
import {Button, StyleSheet, TextInput, View} from "react-native"

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Login = () => {
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
                onPress={() => {

                }}
            />
        </View>
    )
}
export default Login
