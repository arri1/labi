import React, {useState} from 'react'
import {AsyncStorage, Button, StyleSheet, Text, TextInput, View} from "react-native"
import {useApolloClient, useMutation, useQuery} from "@apollo/react-hooks"
import {showMessage} from "react-native-flash-message"
import {USER} from "../gqls/queries"
import {AUTH} from "../gqls/mutations"


const Login = ({navigation}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const apollo = useApolloClient()

    const {loading: userLoading} = useQuery(USER, {
        onCompleted: ({user}) => {
            if (user)
                navigation.push('MainNav')
        },
        onError: () => {
            showMessage({
                message: 'Something went wrong',
                type: 'danger'
            })
        }
    })

    const [auth, {loading: authLoading}] = useMutation(AUTH, {
        onCompleted: async ({authUser}) => {
            await AsyncStorage.setItem('token', authUser.token)
            showMessage({
                message: 'Login successful',
                type: 'info'
            })
            apollo.writeQuery({query: USER, data: {user: authUser.user}})
            navigation.replace('MainNav')
        },
        onError: ({message}) => {
            console.log(message)
            if (message==='GraphQL error: Incorrect password'){
                showMessage({
                    message: 'Incorrect password',
                    type: 'danger'
                })
                return  null
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
                message: 'Enter login',
                type: 'danger'
            })
            return false
        }
        if (password === '') {
            showMessage({
                message: 'Enter password',
                type: 'danger'
            })
            return false
        }
        return true
    }
    const onAuth = () => {
        if (!validate())
            return null
        auth({
            variables: {
                data: {
                    login,
                    password
                }
            }
        })
    }

    if (userLoading || authLoading)
        return (
            <Text style={{marginTop: 20, textAlign: 'center'}}>Loading...</Text>
        )
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={text => setLogin(text)}
                value={login}
                style={[styles.input, {marginTop: 10}]}
                placeholder={'Enter login'}
                placeholderTextColor='#aaaaaa'
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                style={[styles.input, {marginTop: 8}]}
                placeholder={'Enter password'}
                placeholderTextColor='#aaaaaa'
                secureTextEntry={true}
            />
            <View
                style={
                    {marginTop: 24}
                }

            >
                <Button
                    title={'Log in'}
                    onPress={onAuth}
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
                    title={'Registration'}
                    style={{paddingTop: 24}}
                    onPress={
                        () => {
                            navigation.push('Registration')
                        }
                    }
                />
            </View>
        </View>
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
        alignItems: 'center',
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

export default Login