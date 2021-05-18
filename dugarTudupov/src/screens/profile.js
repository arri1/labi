import React, { useState } from 'react'
import { View, ImageBackground} from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import styles from '../styles/styles'
import { showMessage } from 'react-native-flash-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoadingBar from '../components/loadingBar'
import {
    useApolloClient,
    useMutation,
    useQuery
} from '@apollo/client'
import { UPDATE_USER } from '../gqls/user/mutations'
import { USER } from '../gqls/user/queries'
import { useFocusEffect } from '@react-navigation/native'

const image1 = { uri : 'https://images.unsplash.com/photo-1561069933-3323a3203b4f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'};
const image2 = { uri : 'https://images.unsplash.com/photo-1560993503-964a3e0df3ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}

const Profile = ({ navigation }) => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const [
        password,
        setPassword
    ] = useState('')
    const [
        confirmPassword,
        setConfirmPassword
    ] = useState('')
    const apollo = useApolloClient()

    const { loading: userLoading } = useQuery(
        USER,
        {
            onCompleted: ({ user }) => {
                setGroup(user.group)
                setName(user.name)
            },
            onError: () => { }
        }
    )

    useFocusEffect(
        React.useCallback(()=>{
          setImage(global.foo)
        },[])
      )
    

    const [
        save,
        { loading: saveLoading }
    ] = useMutation(UPDATE_USER, {
        onCompleted: ({ user }) => {
            apollo.writeQuery({
                query: USER,
                data: { user }
            })
            showMessage({
                message: 'Изменения были успешно сохранены',
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

    const validate = () => {
        if (name === '') {
            showMessage({
                message: 'Пожалуйста, введите имя!',
                type: 'danger'
            })
            return false
        }
        if (group === '') {
            showMessage({
                message: 'Пожалуйста, введите группу!',
                type: 'danger'
            })
            return false
        }
        if (password === '') {
            showMessage({
                message: 'Пожалуйста, введите новый пароль!',
                type: 'danger'
            })
            return false
        }
        if (password !== confirmPassword) {
            showMessage({
                message: 'Новые пароли не совпадают!',
                type: 'danger'
            })
            return false
        }
        return true
    }

    const logOut = async () => {
        apollo.writeQuery({
            query: USER,
            data: { user: null }
        })
        await AsyncStorage.setItem('token', '')
        navigation.replace('Login')
    }

    if (userLoading || saveLoading)
        return <LoadingBar />

    return (
            <View style={styles.container}>
                      <ImageBackground
        style = {{
          position:'absolute',
          width:'100%',
          height:'100%'
      }}
        source = {image}
        blurRadius = {1}/>
                
                <TextInput
                    label="Введите имя"
                    value={name}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(name) =>
                        setName(name)
                    }
                />
                <TextInput
                    label="Введите группу"
                    value={group}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(group) =>
                        setGroup(group)
                    }
                />
                <TextInput
                    label="Введите новый пароль"
                    value={password}
                    secureTextEntry={true}
                    style={[styles.textInput, { marginTop: 24 }]}
                    onChangeText={(
                        password
                    ) =>
                        setPassword(
                            password
                        )
                    }
                />
                
                <TextInput
                    label="Подтвердите новый пароль"
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
                            marginTop: 30,
                            alignItems: 'center'
                        }
                    }
                >
                    <Button
                        color = '#181818'
                        mode ="contained"
                        style = {styles.borderStyle}
                        labelStyle = {{
                            color: 'white'
                        }}
                        onPress={onSave}
                    >
                        Сохранить
                    </Button>
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
                        color = '#181818'
                        mode = "contained"
                        style = {styles.borderStyle}
                        labelStyle = {{
                            color: 'white'
                        }}
                        onPress={logOut}
                    >
                        Выйти из учетной записи
                    </Button>
                    
                </View>
            </View>
    )
}
export default Profile