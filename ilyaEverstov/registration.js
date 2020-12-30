import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import styles from '../styles/styles';
import { showMessage } from 'react-native-flash-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    useApolloClient,
    useMutation,
    useQuery
} from '@apollo/client'
import { REG, USER } from '../utils/graphql'

const Registration = ({ navigation }) => {
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
                type: 'danger',
            })
            return false
        }
        if (password === '') {
            showMessage({
                message: 'Введите пароль',
                type: 'danger',
            })
            return false
        }
        if (password !== confirmPassword) {
            showMessage({
                message: 'Пароли не совпадают',
                type: 'danger',
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
    
    if (loading) return <ActivityIndicator color={'green'} />
    
    return (
        <View style={styles.containerSignup}>
                <Text style={{
                    fontSize: 24,
                    alignItems: 'center',
                    color: '#29AB87',
                    fontWeight: 'bold'
                }}>
                    РЕГИСТРАЦИЯ
                </Text>
                <View
                    style={{
                        width: '100%',
                        marginBottom: 30
                    }}
                >
                    <Text style={{
                        marginTop: 50,
                        fontSize: 20,
                        color: 'black',
                        fontWeight: 'bold'
                    }} >
                        ЛОГИН
                    </Text>
                    <TextInput
                        label="Введите логин"
                        value={login}
                        style={[styles.textInput, { marginTop: 6 }]}
                        onChangeText={(
                            login
                        ) =>
                            setLogin(login)
                        }
                    />
                    <Text style={{
                        marginTop: 30,
                        fontSize: 20,
                        color: 'black',
                        fontWeight: 'bold'
                    }} >
                        ПАРОЛЬ
                    </Text>
                    <TextInput
                        label="Введите пароль"
                        value={password}
                        secureTextEntry={true}
                        style={[styles.textInput, { marginTop: 6 }]}
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
                            marginTop: 18,
                            alignItems: 'center'
                        }
                    }
                >
                    <Button
                        color='#12A7E7'
                        mode="contained"
                        style={styles.borderStyle}
                        labelStyle={{
                            color: 'white'
                        }}
                        onPress={createUser}
                    >
                        Создать
                    </Button>
                </View>
                <View
                    style={
                        {
                            marginTop: 18,
                            alignItems: 'center'
                        }
                    }
                >
                    <Text>
                        <Text style={{fontSize: 16}}>Уже есть учетная запись?  </Text> 
                        <Text
                        style={{fontSize: 20, fontWeight: 'bold', color: '#2675A1'}}
                        onPress={
                            () => {
                                navigation.goBack()
                            }
                        }
                        >
                            Войдите
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default Registration;
