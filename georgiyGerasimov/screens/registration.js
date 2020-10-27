import React, {useState} from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import {showMessage} from "react-native-flash-message"
import {useMutation} from ''

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
    }
})

const Registration = ({navigation}) => {
    const [login, setLogin] = useState('')
    const [group, setGroup] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const validate = () => {
        if (login === '') {
            showMessage({
                message: "Введите логин",
                type: "danger",
            })
            return false
        }
        if (password === '') {
            showMessage({
                message: "Введите пароль",
                type: "danger",
            })
            return false
        }
        if (password === confirmPassword) {
            showMessage({
                message: "Пароли не совпадают",
                type: "danger",
            })
            return false
        }
        return true
    }

    const createUser = () => {
        if (!validate())
            return null

    }

    return (
        <View
            style={styles.container}
        >
            <TextInput
                onChangeText={text => setLogin(text)}
                value={login}
                style={styles.input}
                placeholder={'Логин'}
            />
            <TextInput
                onChangeText={text => setName(text)}
                value={name}
                style={[styles.input, {marginTop: 24}]}
                placeholder={'Имя'}
            />
            <TextInput
                onChangeText={text => setGroup(text)}
                value={group}
                style={[styles.input, {marginTop: 24}]}
                placeholder={'Группа'}
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                style={[styles.input, {marginTop: 24}]}
                placeholder={'Пароль'}
            />
            <TextInput
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
                style={[styles.input, {marginTop: 24}]}
                placeholder={'Повтарите пароль'}
            />
            <View
                style={
                    {
                        marginTop: 24,
                        alignItems: 'center'
                    }
                }
            >
                <Button
                    title={'Создать'}
                    onPress={createUser}
                />
            </View>
        </View>
    )
}
export default Registration
