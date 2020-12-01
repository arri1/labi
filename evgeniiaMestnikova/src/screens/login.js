import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-paper'
import styles from '../styles/styles'
import colors from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
                    value={username}
                    style={[styles.textInput, { marginTop: 8 }]}
                    onChangeText={(
                        username
                    ) =>
                        setUsername(username)
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
                        onPress={() => {
                            navigation.replace('BottomRouter')
                        }}
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