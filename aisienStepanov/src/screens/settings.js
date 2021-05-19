import React, { useState } from 'react'
import { AsyncStorage, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks"
import { USER } from "../gqls/user/queries"
import LoadingBar from "../components/loadingBar"
import { UPDATE_USER } from "../gqls/user/mutations"
import { showMessage } from "react-native-flash-message"

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24
    },
    container: {
        flex: 1,
        margin: 15
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
        marginTop: 24
    }
})

const Settings = ({ navigation }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [group, setGroup] = useState('')
    const [name, setName] = useState('')

    const apollo = useApolloClient()

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
                message: 'Saved',
                type: 'info'
            })
        },
        onError: () => {
            showMessage({
                message: 'Something went wrong',
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
                message: 'Enter group',
                type: 'danger'
            })
            return false
        }
        if (name === '') {
            showMessage({
                message: 'Enter your name',
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
        if (password !== confirmPassword) {
            showMessage({
                message: 'Passwords do not match',
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
            <Text style={styles.title}>Settings</Text>
            <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder={'Name'}
                style={styles.input}
            />
            <TextInput
                onChangeText={(text) => setGroup(text)}
                value={group}
                placeholder={'Group'}
                style={styles.input}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder={'New password'}
                style={styles.input}
                secureTextEntry={true}
            />
            <TextInput
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry={true}
                placeholder={'Confirm password'}
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
                    title={'Save'}
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
                    title={'Exit'}
                    onPress={logOut}
                />
            </View>
        </View>
    )
}
export default Settings