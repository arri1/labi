import React, { useState } from 'react'
import { AsyncStorage, Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native'
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks"
import { USER } from "../gqls/user/queries"
import LoadingBar from "../components/loadingBar"
import { UPDATE_USER } from "../gqls/user/mutations"
import { showMessage } from "react-native-flash-message"
import { useFocusEffect } from '@react-navigation/native'
import colors from '../colors/colors';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Lato-Regular',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 36,
        color: colors.grey,
        textAlign: 'left',
    },
    container: {
        flex: 1,
        margin: 15
    },
    innerContainer: {
        position: 'absolute',
        width:'110%',
        height:'110%',
        left: -15,
        top: -15,
        backgroundColor: 'rgba(0,0,0, 0.73)'
    },
    input: {
        fontFamily: 'Lato-Regular',
        color: colors.white,
        fontSize: 24,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
        marginTop: 24
    },
})

const Settings = ({ navigation }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [group, setGroup] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState(null)

    const apollo = useApolloClient()

    useFocusEffect(
        React.useCallback(()=>{
          setImage(global.foo)
        },[])
    )

    const { loading: userLoading } = useQuery(USER, {
        onCompleted: ({ user }) => {
            setGroup(user.group)
            setName(user.name)
        },
        onError: () => {

        }
    })

    const [save, { loading: saveLoading }] = useMutation(UPDATE_USER, {
        onCompleted: ({ user }) => {
            apollo.writeQuery({ query: USER, data: { user } })
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
        apollo.writeQuery({ query: USER, data: { user: null } })
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
                message: 'Пароли не совпадают!',
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

    if (userLoading || saveLoading)
        return (
            <LoadingBar />
        )

    return (
        <View style={styles.container}>
            <ImageBackground
            style = {{
                position:'absolute',
                width:'105%',
                height:'105%',
                left: -15,
                top: -15,
            }}
                source = {image}
                blurRadius = {1}/>
            <View style = {styles.innerContainer}>
            <Text style={styles.title}>Настройки</Text>
            <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder={'Имя'}
                placeholderTextColor = {colors.grey}
                style={styles.input}
            />
            <TextInput
                onChangeText={(text) => setGroup(text)}
                value={group}
                placeholder={'Группа'}
                placeholderTextColor = {colors.grey}
                style={styles.input}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder={'Новый пароль'}
                placeholderTextColor = {colors.grey}
                style={styles.input}
                secureTextEntry={true}
            />
            <TextInput
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry={true}
                placeholder={'Подтвердите пароль'}
                placeholderTextColor = {colors.grey}
                style={styles.input}
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
                    onPress={onSave}
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
                    title={'Выход'}
                    onPress={logOut}
                />
            </View>
            </View>
        </View>
    )
}
export default Settings 