import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-paper'
import styles from '../styles/styles'
import colors from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient'

const Profile = () => {
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
            <View style={styles.containerProfile}>
                <TextInput
                    label="Имя"
                    value={name}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(name) =>
                        setName(name)
                    }
                />
                <TextInput
                    label="Группа"
                    value={group}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(group) =>
                        setGroup(group)
                    }
                />
                <TextInput
                    label="Новый пароль"
                    value={newPassword}
                    secureTextEntry={true}
                    style={[styles.textInput, { marginTop: 24 }]}
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
                <View
                    style={
                        {
                            marginTop: 24,
                            alignItems: 'center'
                        }
                    }
                >
                    <Button
                        title={'Сохранить'}
                    //onPress={onSave}
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
                        title={'Выйти из аккаунта'}
                    //onPress={logOut}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}
export default Profile