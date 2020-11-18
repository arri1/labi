import React, {
    useState,
    useContext
} from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
// styling
import styles from '../styles/styles'
// Custom components
import ChangingBackground from '../components/ChangingBackground'
import CustomButtonPrimary from '../components/CustomButtonPrimary'
import CustomButtonSecondary from '../components/CustomButtonSecondary'
import { AppContext } from '../styles/DynamicThemeProvider'

const Profile = () => {
    const context = useContext(AppContext)
    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const [
        newPassword,
        setNewPassword
    ] = useState('')
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
                        style={{
                            width: '100%',
                            backgroundColor:
                                'transparent',
                            color:
                                context.theme
                                    .colors
                                    .textColor
                        }}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        theme={textInputTheme}
                        onChangeText={(name) =>
                            setName(name)
                        }
                    />
                    <TextInput
                        label="Группа"
                        value={group}
                        style={{
                            width: '100%',
                            backgroundColor:
                                'transparent',
                            color:
                                context.theme
                                    .colors
                                    .textColor
                        }}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        theme={textInputTheme}
                        onChangeText={(group) =>
                            setGroup(group)
                        }
                    />
                    <TextInput
                        label="Новый пароль"
                        value={newPassword}
                        style={{
                            width: '100%',
                            backgroundColor:
                                'transparent',
                            color:
                                context.theme
                                    .colors
                                    .textColor
                        }}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        theme={textInputTheme}
                        onChangeText={(
                            newPassword
                        ) =>
                            setNewPassword(
                                newPassword
                            )
                        }
                    />
                    <TextInput
                        label="Повторите пароль"
                        value={confirmPassword}
                        style={{
                            width: '100%',
                            backgroundColor:
                                'transparent',
                            color:
                                context.theme
                                    .colors
                                    .textColor
                        }}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
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
                <CustomButtonPrimary text="Сохранить" />
                <CustomButtonSecondary text="Выйти из аккаунта" />
            </View>
        </View>
    )
}

export default Profile
