import React, {useState} from 'react'
import {AsyncStorage, Button, StyleSheet, Text, TextInput, View} from 'react-native'
import {useApolloClient, useQuery} from "@apollo/react-hooks"
import {USER} from "../gqls/user/queries"
import LoadingBar from "../components/loadingBar"

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

const Settings = ({navigation}) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [group, setGroup] = useState('')
    const [name, setName] = useState('')

    const apollo = useApolloClient()

    const {loading} = useQuery(USER, {
        onCompleted: () => {

        },
        onError: () => {

        }
    })

    const logOut = async () => {
        apollo.writeQuery({query: USER, data: {user: null}})
        await AsyncStorage.setItem('token', '')
        navigation.replace('Login')
    }

    if (loading)
        return (
            <LoadingBar/>
        )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Настройки</Text>
            <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder={'Имя'}
                style={styles.input}
            />
            <TextInput
                onChangeText={(text) => setGroup(text)}
                value={group}
                placeholder={'Группа'}
                style={styles.input}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder={'Новый пароль'}
                style={styles.input}
            />
            <TextInput
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                placeholder={'Повтарите пароль'}
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
                    onPress={
                        () => {
                            navigation.replace('Login')
                        }
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
                    title={'Выйти'}
                    onPress={logOut}
                />
            </View>
        </View>
    )
}
export default Settings
