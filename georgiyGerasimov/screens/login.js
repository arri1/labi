import React, {useState} from 'react'
import {Button, StyleSheet, TextInput, View} from "react-native"

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 15
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
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
                style={styles.input}
                placeholder={'Логин'}
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                style={[styles.input, {marginTop: 24}]}
                placeholder={'Пароль'}
            />
            <View
                style={
                    {marginTop: 24}
                }

            >
                <Button
                    title={'Войти'}
                    onPress={() => {
                        navigation.replace('BottomRouter')
                    }}
                />
            </View>
            <View
                style={
                    {
                        marginTop: 24,
                    }
                }

            >
                <Button
                    title={'Регистрация'}
                    style={{paddingTop: 24}}
                    onPress={
                        () => {
                            navigation.push('Registration')
                        }
                    }
                />
            </View>
        </View>
    )
}
export default Login
