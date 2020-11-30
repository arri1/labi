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
import CustomButtonSecondary from '../components/CustomButtonSecondary'
import { AppContext } from '../styles/DynamicThemeProvider'
import LoadingBar from '../components/LoadingBar'
// Apollo
import {
    useApolloClient,
    useMutation,
    useQuery
} from '@apollo/client'
import { UPDATE_USER } from '../apollo/gql/user/mutations'
import { USER } from '../apollo/gql/user/queries'

const Profile = ({ navigation }) => {
    const context = useContext(AppContext)
    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const [password, setPassword] = useState('')
    const [
        confirmPassword,
        setConfirmPassword
    ] = useState('')
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

    const apollo = useApolloClient()

    const { loading: userLoading } = useQuery(
        USER,
        {
            onCompleted: ({ user }) => {
                setGroup(user.group)
                setName(user.name)
            },
            onError: () => {}
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

    const textInputStyle = {
        width: '100%',
        backgroundColor: 'transparent',
        color: context.theme.colors.textColor
    }

    if (userLoading || saveLoading)
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
                    Настройки
                </Text>
                <View
                    style={{
                        width: '85%',
                        marginBottom: 30
                    }}
                >
                    <TextInput
                        label="Имя"
                        value={name}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        theme={textInputTheme}
                        style={textInputStyle}
                        onChangeText={(name) =>
                            setName(name)
                        }
                    />
                    <TextInput
                        label="Группа"
                        value={group}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        style={textInputStyle}
                        theme={textInputTheme}
                        onChangeText={(group) =>
                            setGroup(group)
                        }
                    />
                    <TextInput
                        label="Новый пароль"
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
                    text="Сохранить"
                    onPress={onSave}
                />
                <CustomButtonSecondary
                    text="Выйти из аккаунта"
                    onPress={logOut}
                />
            </View>
        </View>
    )
}

export default Profile
