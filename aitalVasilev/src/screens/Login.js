import React, {
    useState,
    useContext
} from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
// styling
import styles from '../styles/styles'
// Custom components
import CustomButtonPrimary from '../components/CustomButtonPrimary'
import CustomTextButton from '../components/CustomTextButton'
import { AppContext } from '../styles/DynamicThemeProvider'

const Login = ({ navigation }) => {
    const context = useContext(AppContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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

    return (
        <View
            style={{
                flex: 1,
                backgroundColor:
                    context.theme.colors.cardColor
            }}
        >
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
                    onPress={() => {
                        navigation.navigate(
                            'MainNavigation'
                        )
                    }}
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
