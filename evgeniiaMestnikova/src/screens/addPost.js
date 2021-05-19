import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { useMutation, useQuery } from '@apollo/client'
import { USER } from '../gqls/user/queries'
import LoadingBar from '../components/loadingBar'
import { showMessage } from 'react-native-flash-message'
import { CREATE_ONE_POST } from '../gqls/post/mutations'
import styles from '../styles/styles'
import colors from '../styles/colors'

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
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[
                colors.gradient1,
                colors.gradient2
            ]}
            style={{ flex: 1 }}
        >
            <View style={styles.containerAddPost}>
                <View
                    style={{
                        width: '90%',
                        marginBottom: 30
                    }}
                >
                    <TextInput
                        onChangeText={(text) => setTitle(text)}
                        value={title}
                        placeholder={'Название поста'}
                        style={styles.inputAddPost}
                    />
                    <Text style={{
                        fontSize: 18,
                        color: colors.black,
                        marginTop: 20
                    }}>
                        Что у вас нового?
                </Text>
                    <TextInput
                        onChangeText={(text) => setText(text)}
                        value={text}
                        placeholder={'Что у вас нового?'}
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
                        color={colors.sweetPink}
                        mode="contained"
                        style={styles.borderStyle}
                        labelStyle={{
                            color: colors.white
                        }}
                        onPress={onSave}
                    >
                        Сохранить
                    </Button>
                </View>
            </View>
        </LinearGradient>
    )
}
export default AddPost
