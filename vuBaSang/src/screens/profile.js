import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import styles from '../styles/styles'
import { showMessage } from 'react-native-flash-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoadingBar from '../components/loadingBar'
import {
    useApolloClient,
    useMutation,
    useQuery
} from '@apollo/client'
import { UPDATE_USER } from '../gqls/user/mutations'
import { USER } from '../gqls/user/queries'

const Profile = ({ navigation }) => {
    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const [
        password,
        setPassword
    ] = useState('')
    const [
        confirmPassword,
        setConfirmPassword
    ] = useState('')
    const apollo = useApolloClient()

    const { loading: userLoading } = useQuery(
        USER,
        {
            onCompleted: ({ user }) => {
                setGroup(user.group)
                setName(user.name)
            },
            onError: () => { }
        }
    )

    const [
        save,
        { loading: saveLoading }
    ] = useMutation(UPDATE_USER, {
        onCompleted: ({ user }) => {
            apollo.writeQuery({
                query: USER,
                data: { user }
            })
            showMessage({
                message: 'Изменения были успешно сохранены',
                type: 'info'
            })
        },
        onError: () => {
            showMessage({
                message: 'Что-то пошло не так',
                type: 'danger'
            })
        }
    })

    const onSave = () => {
        if (!validate()) {
            return null
        }
        save({
            variables: {
                data: {
                    group: { set: group },
                    name: { set: name },
                    password: { set: password }
                }
            }
        })
    }

    const validate = () => {
        if (name === '') {
            showMessage({
                message: 'Пожалуйста, введите имя!',
                type: 'danger'
            })
            return false
        }
        if (group === '') {
            showMessage({
                message: 'Пожалуйста, введите группу!',
                type: 'danger'
            })
            return false
        }
        if (password === '') {
            showMessage({
                message: 'Пожалуйста, введите новый пароль!',
                type: 'danger'
            })
            return false
        }
        if (password !== confirmPassword) {
            showMessage({
                message: 'Новые пароли не совпадают!',
                type: 'danger'
            })
            return false
        }
        return true
    }

    const logOut = async () => {
        apollo.writeQuery({
            query: USER,
            data: { user: null }
        })
        await AsyncStorage.setItem('token', '')
        navigation.replace('Login')
    }

    if (userLoading || saveLoading)
        return <LoadingBar />

    return (
            <View style={styles.containerProfile}>
                <TextInput
                    label="Введите имя"
                    value={name}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(name) =>
                        setName(name)
                    }
                />
                <TextInput
                    label="Введите группу"
                    value={group}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(group) =>
                        setGroup(group)
                    }
                />
                <TextInput
                    label="Введите новый пароль"
                    value={password}
                    secureTextEntry={true}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(
                        password
                    ) =>
                        setPassword(
                            password
                        )
                    }
                />
                <TextInput
                    label="Подтвердите новый пароль"
                    value={confirmPassword}
                    secureTextEntry={true}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(
                        confirmPassword
                    ) =>
                        setConfirmPassword(
                            confirmPassword
                        )
                    }
                />
                <View
                    style={
                        {
                            marginTop: 30,
                            alignItems: 'center'
                        }
                    }
                >
                    <Button
                        color = '#12A7E7'
                        mode ="contained"
                        style = {styles.borderStyle}
                        labelStyle = {{
                            color: 'white'
                        }}
                        onPress={onSave}
                    >
                        Сохранить
                    </Button>
                </View>
                <View
                    style={
                        {
                            marginTop: 24,
                            alignItems: 'center'
                        }
                    }
                >
                    <Button
                        color = '#E72632'
                        mode = "contained"
                        style = {styles.borderStyle}
                        labelStyle = {{
                            color: 'white'
                        }}
                        onPress={logOut}
                    >
                        Выйти из учетной записи
                    </Button>
                </View>
            </View>
    )
}
export default Profile