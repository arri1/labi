import React, {useState} from 'react'
import {AsyncStorage, Button, StyleSheet, Text, TextInput, View} from 'react-native'
import {useApolloClient, useMutation, useQuery} from "@apollo/react-hooks"
import {USER} from "../gqls/queries"
import {UPDATE_USER} from "../gqls/mutations"
import {showMessage} from "react-native-flash-message"


const Settings = ({navigation}) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [group, setGroup] = useState('')
    const [name, setName] = useState('')

    const apollo = useApolloClient()

    const {loading: userLoading} = useQuery(USER, {
        onCompleted: ({user}) => {
            setGroup(user.group)
            setName(user.name)
        },
        onError: () => {
            showMessage({
                message: 'Something went wrong',
                type: 'danger'
            })
        }
    })

    const [save, {loading: saveLoading}] = useMutation(UPDATE_USER, {
        onCompleted: ({user}) => {
            apollo.writeQuery({query: USER, data: {user}})
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
        apollo.writeQuery({query: USER, data: {user: null}})
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
                message: 'Enter name',
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
                message: 'Passwords are not matching',
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
                    group: {set: group},
                    name: {set: name},
                    password: {set: password}
                }
            }
        })
    }

    if (userLoading || saveLoading)
        return (
            <Text>Loading</Text>
        )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder={'Name'}
                placeholderTextColor='#aaaaaa'
                style={styles.input}
            />
            <TextInput
                onChangeText={(text) => setGroup(text)}
                value={group}
                placeholder={'Group'}
                placeholderTextColor='#aaaaaa'
                style={styles.input}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder={'New password'}
                placeholderTextColor='#aaaaaa'
                style={styles.input}
                secureTextEntry={true}
            />
            <TextInput
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry={true}
                placeholder={'Repeat password'}
                placeholderTextColor='#aaaaaa'
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
                    title={'Log out'}
                    onPress={logOut}
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


export default Settings 