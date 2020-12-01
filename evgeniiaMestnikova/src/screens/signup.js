import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-paper'
import styles from '../styles/styles'
import colors from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient'

const Signup = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [
        confirmPassword,
        setConfirmPassword
    ] = useState('')

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
                <Text>Регистрация</Text>
                <View
                    style={{
                        width: '85%',
                        marginBottom: 30
                    }}
                >
                    <TextInput
                        label="Имя пользователя"
                        value={username}
                        style={[styles.textInput, { marginTop: 24 }]}
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
                        title={'Создать'}
                    //onPress={createUser}
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
                        title={'Назад'}
                        onPress={
                            () => {
                                navigation.goBack()
                            }
                        }
                    />
                </View>
            </View>
        </LinearGradient>
    )
}
export default Signup