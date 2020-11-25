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
import { AUTH } from '../apollo/gql/user/mutations'
import { USER } from '../apollo/gql/user/queries'

const Login = ({ navigation }) => {
    const context = useContext(AppContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const apollo = useApolloClient()

    const { loading: userLoading } = useQuery(
        USER,
        {
            onCompleted: ({ user }) => {
                if (user)
                    navigation.navigate(
                        'MainNavigation'
                    )
            },
            onError: () => {}
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
            navigation.replace('MainNavigation')
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
        if (username === '') {
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
                    username,
                    password
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

    if (userLoading || authLoading)
        return <LoadingBar />
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
                    Вход
                </Text>
                <View
                    style={{
                        width: '85%',
                        marginBottom: 30
                    }}
                >
                    <TextInput
                        label="Имя пользователя"
                        value={username}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        theme={textInputTheme}
                        style={textInputStyle}
                        onChangeText={(
                            username
                        ) =>
                            setUsername(username)
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
                </View>
                <CustomButtonPrimary
                    text="Войти"
                    onPress={authUser}
                />
                <CustomTextButton
                    text="Создать новый аккаунт"
                    onPress={() => {
                        navigation.push('Signup')
                    }}
                />
            </View>
        </View>
    )
}

export default Login
