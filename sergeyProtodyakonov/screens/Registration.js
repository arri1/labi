import React, {useState} from 'react'
import {AsyncStorage, Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import {showMessage} from "react-native-flash-message"
import {useApolloClient, useMutation} from "@apollo/react-hooks"
import {REG} from "../gqls/mutations"
import {USER} from "../gqls/queries"


const Registration = ({navigation}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const apollo = useApolloClient()

    const [reg, {loading}] = useMutation(REG, {
        onCompleted: async ({registerUser}) => {
            await AsyncStorage.setItem('token', registerUser.token)
            showMessage({
                message: 'Registration successful',
                type: 'info'
            })
            apollo.writeQuery({query: USER, data: {user: registerUser.user}})
            navigation.goBack()
        },
        onError: ({message}) => {
            if (message === 'GraphQL error: Unique constraint failed on the fields: (`login`)') {
                showMessage({
                    message: 'Login already exists',
                    type: 'danger'
                })
                return null
            }
            showMessage({
                message: 'Something went wrong',
                type: 'danger'
            })
        }
    })

    const validate = () => {
        if (login === '') {
            showMessage({
                message: "Enter login",
                type: "danger",
            })
            return false
        }
        if (password === '') {
            showMessage({
                message: "Enter password",
                type: "danger",
            })
            return false
        }
        if (password !== confirmPassword) {
            showMessage({
                message: "Passwords are not matching",
                type: "danger",
            })
            return false
        }
        return true
    }

    const createUser = () => {
        if (!validate())
            return null
        reg({
            variables: {
                data: {
                    password,
                    login
                }
            }
        })
    }

    if (loading)
        return (
            <Text>Loading</Text>
        )

    return (
        <ScrollView
            style={styles.container}
        >
            <TextInput
                onChangeText={text => setLogin(text)}
                value={login}
                style={[styles.input,{marginTop: 10}]}
                placeholder={'Enter login'}
                placeholderTextColor='#aaaaaa'
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
                style={[styles.input, {marginTop: 24}]}
                placeholder={'Enter password'}
                placeholderTextColor='#aaaaaa'
            />
            <TextInput
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry={true}
                style={[styles.input, {marginTop: 8}]}
                placeholder={'Repeat password'}
                placeholderTextColor='#aaaaaa'
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
                    title={'Create'}
                    onPress={createUser}
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
                    title={'Back'}
                    onPress={
                        () => {
                            navigation.goBack()
                        }
                    }
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24,
        color: '#ffffff',
        paddingTop: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#222222'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ffffff',
        color: '#ffffff',
        alignSelf: 'stretch',
        margin: 10
    }
})

export default Registration