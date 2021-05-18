import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { showMessage } from 'react-native-flash-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from '../styles/styles';
import LoadingBar from '../components/loadingBar'
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
                    message: 'Неверен пароль!',
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
                    'Пожалуйста, введите логин!',
                type: 'danger'
            })
            return false
        }
        if (password === '') {
            showMessage({
                message: 'Пожалуйста, введите пароль!',
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
        <View style={styles.containerLogin}>
            <Text style={{
                    fontSize: 28,
                    alignItems: 'center',
                    color: '#29AB87',
                    fontWeight: 'bold'
                }}>
                    ВХОД
            </Text>
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
                style={[styles.textInput, { marginTop: 8 }]}
                onChangeText={(
                    login
                ) =>
                    setLogin(login)
                }
            />
            <Text style={{
                marginTop: 24,
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold'
            }}>
                ПАРОЛЬ
            </Text>
            <TextInput
                label="Введите пароль"
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
                    { marginTop: 40 }
                }

            >
                <Button
                    color='#12A7E7'
                    mode="contained"
                    style={styles.borderStyle}
                    labelStyle={{
                        color: 'white'
                    }}
                    onPress={authUser}
                >
                    Войти
                </Button>
            </View>
            <View
                style={
                    {
                        marginTop: 28,
                        alignItems: 'center'
                    }
                }

            >
                <Text style={{fontSize: 16}}>
                    Вы ещё не зарегистрировали учетную запись? 
                </Text>
                
                <Text
                    style={styles.borderStyle}
                    style={{marginTop: 6, fontSize: 20, fontWeight: 'bold', color: '#2675A1'}}
                    onPress={() => {
                        navigation.push('Signup')
                    }}
                >
                    Создать учетную запись 
                </Text>
            </View>
        </View>
    )
}
export default Login