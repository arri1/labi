import React, {useState} from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
    }
})

const Registration = ({navigation}) => {
    const [login, setLogin] = useState('')
    const [group, setGroup] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <View
            style={styles.container}
        >
            <TextInput
                onChangeText={text => setLogin(text)}
                value={login}
                style={styles.input}
                placeholder={'Логин'}
            />
            <TextInput
                onChangeText={text => setName(text)}
                value={name}
                style={styles.input}
                placeholder={'Имя'}
            />
            <TextInput
                onChangeText={text => setGroup(text)}
                value={group}
                style={[styles.input, {marginTop: 24}]}
                placeholder={'Группа'}
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                style={[styles.input, {marginTop: 24}]}
                placeholder={'Пароль'}
            />
            <TextInput
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
                style={[styles.input, {marginTop: 24}]}
                placeholder={'Повтарите пароль'}
            />
            <View
                style={
                    {
                        marginTop: 24,
                        alignItems:'center'
                    }
                }
            >
                <Button
                    title={'Создать'}
                    onPress={
                        () => {
                            navigation.goBack()
                        }
                    }
                />
            </View>
        </View>
    )
}
export default Registration
