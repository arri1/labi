import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-paper'
import { showMessage } from 'react-native-flash-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from '../styles/styles'
import colors from '../styles/colors'
import LoadingBar from '../components/loadingBar'
import LinearGradient from 'react-native-linear-gradient'
import {
    useApolloClient,
    useMutation,
    useQuery
} from '@apollo/client'
import { AUTH } from '../gqls/user/mutations'
import { USER } from '../gqls/user/queries'

const Login = ({ navigation }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const apollo = useApolloClient()

    const { loading: userLoading } = useQuery(
        USER,
        {
            onCompleted: ({ user }) => {
                if (user)
                    navigation.navigate(
                        'BottomRouter'
                    )
            },
            onError: () => { }
        }
    )

    const [
        auth,
        { loading: authLoading }
    ] = useMutation(AUTH, {
        onCompleted: async ({ authUser }) => {
            await AsyncStorage.setItem(
                'token',
                authUser.token
            )
            showMessage({
                message: 'Вход прошёл успешно',
                type: 'info'
            })
            apollo.writeQuery({
                query: USER,
                data: { user: authUser.user }
            })
            navigation.replace('BottomRouter')
        },
        onError: ({ message }) => {
            console.log(message)
            if (
                message ===
                'GraphQL error: Incorrect password'
            ) {
                showMessage({
                    message: 'Неверен пароль',
                    type: 'danger'
                })
                return null
            }
            showMessage({
                message: 'Что то пошло не так',
                type: 'danger'
            })
        }
    })

    const validate = () => {
        if (login === '') {
            showMessage({
                message:
                    'Введите имя пользователя!',
                type: 'danger'
            })
            return false
        }
        if (password === '') {
            showMessage({
                message: 'Введите пароль!',
                type: 'danger'
            })
            return false
        }
        return true
    }
    const authUser = () => {
        if (!validate()) return null
        auth({
            variables: {
                data: {
                    login,
                    password
                }
            }
        })
    }

    if (userLoading || authLoading)
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
            <View style={styles.containerLogin}>
                <Text>Вход</Text>
                <TextInput
                    label="Имя пользователя"
                    value={login}
                    style={[styles.textInput, { marginTop: 8 }]}
                    onChangeText={(
                        login
                    ) =>
                        setLogin(login)
                    }
                />
                <Text style={{ marginTop: 24 }}>Пароль</Text>
                <TextInput
                    label="Пароль"
                    value={password}
                    secureTextEntry={true}
                    style={[styles.textInput, { marginTop: 8 }]}
                    onChangeText={(
                        password
                    ) =>
                        setPassword(password)
                    }
                />
                <View
                    style={
                        { marginTop: 24 }
                    }

                >
                    <Button
                        title={'Войти'}
                        onPress={authUser}
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
                        style={{ paddingTop: 24 }}
                        onPress={() => {
                            navigation.push('Signup')
                        }}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}
export default Login