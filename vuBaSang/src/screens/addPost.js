import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useMutation, useQuery } from '@apollo/client'
import { USER } from '../gqls/user/queries'
import LoadingBar from '../components/loadingBar'
import { showMessage } from 'react-native-flash-message'
import { CREATE_ONE_POST } from '../gqls/post/mutations'
import styles from '../styles/styles'

const AddPost = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [userId, setUserId] = useState('')

    const { loading: userLoading } = useQuery(USER, {
        onCompleted: ({ user }) => {
            setUserId(user.id)
        },
        onError: () => {

        }
    })

    const [save, { loading: saveLoading }] = useMutation(CREATE_ONE_POST, {
        onCompleted: () => {
            showMessage({
                message: 'Добавлено',
                type: 'info'
            })
            navigation.goBack()
        },
        onError: () => {
            showMessage({
                message: 'Что то пошло не так',
                type: 'danger'
            })
        }
    })

    const onSave = () => {
        save({
            variables: {
                data: {
                    title,
                    text,
                    user: { connect: { id: userId } }
                }
            }
        })
    }

    if (userLoading || saveLoading)
        return (
            <LoadingBar />
        )

    return (
        <View style={styles.containerAddPost}>
            <View
                style={{
                    width: '90%',
                    marginBottom: 30
                }}
            >
                <Text style={{
                    fontSize: 18,
                    color: 'black',
                    marginTop: 20
                }}>
                    Напишите название поста!
                </Text>
                <TextInput
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                    placeholder={'Название поста'}
                    style={styles.inputAddPost}
                />
                <Text style={{
                    fontSize: 18,
                    color: 'black',
                    marginTop: 20
                }}>
                    Что у Вас нового?
                </Text>
                <TextInput
                    onChangeText={(text) => setText(text)}
                    value={text}
                    placeholder={'Что у Вас нового?'}
                    style={styles.inputAddPost}
                    multiline={true}
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
                    color={'#12A7E7'}
                    mode="contained"
                    style={styles.borderStyle}
                    labelStyle={{
                        color: 'white'
                    }}
                    onPress={onSave}
                >
                    + Добавить пост
                </Button>
            </View>
        </View>
    )
}
export default AddPost
