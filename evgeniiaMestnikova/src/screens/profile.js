import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-paper'
import styles from '../styles/styles'
import colors from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient'
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

const Profile = ({navigation}) => {
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
                message: 'Сохранено',
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

    const logOut = async () => {
        apollo.writeQuery({
            query: USER,
            data: { user: null }
        })
        await AsyncStorage.setItem('token', '')
        navigation.replace('Login')
    }

    const validate = () => {
        if (group === '') {
            showMessage({
                message: 'Введите группу',
                type: 'danger'
            })
            return false
        }
        if (name === '') {
            showMessage({
                message: 'Введите имя',
                type: 'danger'
            })
            return false
        }
        if (password === '') {
            showMessage({
                message: 'Введите пароль',
                type: 'danger'
            })
            return false
        }
        if (password !== confirmPassword) {
            showMessage({
                message: 'Пароли не совпадают',
                type: 'danger'
            })
            return false
        }
        return true
    }

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

    if (userLoading || saveLoading)
        return <LoadingBar />

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[
                colors.gradient1,
                colors.gradient2
            ]}
            style={{ flex: 1 }}
        >
            <View style={styles.containerProfile}>
                <TextInput
                    label="Имя"
                    value={name}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(name) =>
                        setName(name)
                    }
                />
                <TextInput
                    label="Группа"
                    value={group}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(group) =>
                        setGroup(group)
                    }
                />
                <TextInput
                    label="Новый пароль"
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
                    label="Повторите пароль"
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
                            marginTop: 24,
                            alignItems: 'center'
                        }
                    }
                >
                    <Button
                        title={'Сохранить'}
                        onPress={onSave}
                    />
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
                        title={'Выйти из аккаунта'}
                        onPress={logOut}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}
export default Profile