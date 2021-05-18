import React, {
    useState,
    useContext
} from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import { showMessage } from 'react-native-flash-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
// styling
import styles from '../styles/styles'
// Custom components
import ChangingBackground from '../components/ChangingBackground'
import CustomButtonPrimary from '../components/CustomButtonPrimary'
import CustomTextButton from '../components/CustomTextButton'
import { AppContext } from '../styles/DynamicThemeProvider'
import LoadingBar from '../components/LoadingBar'
// Apollo
import {
    useApolloClient,
    useMutation,
    useQuery
} from '@apollo/client'
import { REG } from '../apollo/gql/user/mutations'
import { USER } from '../apollo/gql/user/queries'

const Signup = ({ navigation }) => {
    const context = useContext(AppContext)
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
                'GraphQL error: Unique constraint failed on the fields: (`login`)'
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

    const textInputTheme = {
        colors: {
            primary:
                context.theme.colors.textColor,
            underlineColor:
                context.theme.colors.textColor,
            text: context.theme.colors.textColor,
            placeholder:
                context.theme.colors.textColor
        }
    }
    const textInputStyle = {
        width: '100%',
        backgroundColor: 'transparent',
        color: context.theme.colors.textColor
    }

    if (loading) return <LoadingBar />

    return (
        <View style={{ flex: 1 }}>
            <ChangingBackground />
            <View
                style={{
                    ...styles.container,
                    backgroundColor:
                        context.theme.colors
                            .cardColor
                }}
            >
                <Text
                    style={{
                        ...styles.settingsTitle,
                        color:
                            context.theme.colors
                                .textColor
                    }}
                >
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
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        theme={textInputTheme}
                        style={textInputStyle}
                        onChangeText={(login) =>
                            setLogin(login)
                        }
                    />
                    <TextInput
                        label="Пароль"
                        value={password}
                        secureTextEntry={true}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        style={textInputStyle}
                        theme={textInputTheme}
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
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        style={textInputStyle}
                        theme={textInputTheme}
                        onChangeText={(
                            confirmPassword
                        ) =>
                            setConfirmPassword(
                                confirmPassword
                            )
                        }
                    />
                </View>
                <CustomButtonPrimary
                    text="Создать"
                    onPress={createUser}
                />
                <CustomTextButton
                    text="Уже есть аккаунт"
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </View>
        </View>
    )
}

export default Signup
