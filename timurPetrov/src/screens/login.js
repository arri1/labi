import React, { useState } from 'react'
import { AsyncStorage, Button, StyleSheet, Text, TextInput, View } from "react-native"
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks"
import { showMessage } from "react-native-flash-message"
import { USER } from "../gqls/user/queries"
import LoadingBar from "../components/LoadingBar"
import { AUTH } from "../gqls/user/mutations"

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        margin: 15
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
    }
})

const Login = ({ navigation }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const apollo = useApolloClient()

    const { loading: userLoading } = useQuery(USER, {
        onCompleted: ({ user }) => {
            if (user) {
                navigation.push('BottomRouter')
            }
        },
        onError: () => {

        }
    })

    const [auth, { loading: authLoading }] = useMutation(AUTH, {
        onCompleted: async ({ authUser }) => {
            await AsyncStorage.setItem('token', authUser.token)
            showMessage({
                message: 'Registration completed successfully',
                type: 'info'
            })
            apollo.writeQuery({ query: USER, data: { user: authUser.user } })
            navigation.replace('BottomRouter')
        },
        onError: ({ message }) => {
            console.log(message)
            if (message === 'GraphQL error: Incorrect password') {
                showMessage({
                    message: 'Incorrect password',
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
            <LoadingBar />
        )
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                onChangeText={text => setLogin(text)}
                value={login}
                style={[styles.input, { marginTop: 8 }]}
                placeholder={'Enter login'}
            />
            <Text style={{ marginTop: 24 }}>Password</Text>
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                style={[styles.input, { marginTop: 8 }]}
                placeholder={'Enter password'}
                secureTextEntry={true}
            />
            <View
                style={
                    { marginTop: 24 }
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
                    style={{ paddingTop: 24 }}
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
export default Login