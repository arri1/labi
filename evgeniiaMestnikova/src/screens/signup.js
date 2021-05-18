import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
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
import { REG } from '../gqls/user/mutations'
import { USER } from '../gqls/user/queries'

const Signup = ({ navigation }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [
        confirmPassword,
        setConfirmPassword
    ] = useState('')
    const apollo = useApolloClient()

    const [reg, { loading }] = useMutation(REG, {
        onCompleted: async ({ registerUser }) => {
            await AsyncStorage.setItem(
                'token',
                registerUser.token
            )
            showMessage({
                message:
                    'Регистрация прошла успешно',
                type: 'info'
            })
            apollo.writeQuery({
                query: USER,
                data: { user: registerUser.user }
            })
            navigation.goBack()
        },
        onError: ({ message }) => {
            if (
                message ===
                'GraphQL error: Unique constraint failed on the fields: (login)'
            ) {
                showMessage({
                    message:
                        'Такой логин уже существует',
                    type: 'danger'
                })
                return null
            }
            showMessage({
                message: 'Что-то пошло не так',
                type: 'danger'
            })
        }
    })

    const validate = () => {
        if (login === '') {
            showMessage({
                message: 'Введите логин',
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

    const createUser = () => {
        if (!validate()) return null
        reg({
            variables: {
                data: {
                    password,
                    login
                }
            }
        })
    }

    if (loading) return <LoadingBar />

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
            <View style={styles.containerSignup}>
                <Text style={{
                    fontSize: 24,
                    color: colors.black
                }}>
                    Регистрация
                </Text>
                <View
                    style={{
                        width: '85%',
                        marginBottom: 30
                    }}
                >
                    <TextInput
                        label="Имя пользователя"
                        value={login}
                        style={[styles.textInput, { marginTop: 24 }]}
                        onChangeText={(
                            login
                        ) =>
                            setLogin(login)
                        }
                    />
                    <TextInput
                        label="Пароль"
                        value={password}
                        secureTextEntry={true}
                        style={[styles.textInput, { marginTop: 24 }]}
                        onChangeText={(
                            password
                        ) =>
                            setPassword(password)
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
                        color={colors.sweetPink}
                        mode="contained"
                        style={styles.borderStyle}
                        labelStyle={{
                            color: colors.white
                        }}
                        onPress={createUser}
                    >
                        Создать
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
                        color={colors.sweetPink}
                        mode="contained"
                        style={styles.borderStyle}
                        labelStyle={{
                            color: colors.white
                        }}
                        onPress={
                            () => {
                                navigation.goBack()
                            }
                        }
                    >
                        Назад
                    </Button>
                </View>
            </View>
        </LinearGradient>
    )
}
export default Signup