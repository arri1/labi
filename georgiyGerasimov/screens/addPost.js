import React, {useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import {useApolloClient, useMutation, useQuery} from '@apollo/react-hooks'
import {USER} from '../gqls/user/queries'
import LoadingBar from '../components/loadingBar'
import {showMessage} from 'react-native-flash-message'
import {CREATE_ONE_POST} from '../gqls/post/mutations'

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

const AddPost = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [userId, setUserId] = useState('')

    const {loading: userLoading} = useQuery(USER, {
        onCompleted: ({user}) => {
            setUserId(user.id)
        },
        onError: () => {

        }
    })

    const [save, {loading: saveLoading}] = useMutation(CREATE_ONE_POST, {
        onCompleted: ({createOnePost}) => {
            showMessage({
                message: 'Добавлено',
                type: 'info'
            })
            navigation.goBack()
        },
        onError: () => {
            showMessage({
                message: 'что то пошло не так',
                type: 'danger'
            })
        }
    })

    const onSave = () => {
        save({
            variables: {
                data: {
                    title,
                    user: {connect: {id: userId}}
                }
            }
        })
    }

    if (userLoading || saveLoading)
        return (
            <LoadingBar/>
        )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Добвить пост</Text>
            <TextInput
                onChangeText={(text) => setTitle(text)}
                value={title}
                placeholder={'Загаловок'}
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
        </View>
    )
}
export default AddPost
