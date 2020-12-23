import React, {
    useState,
    useContext
} from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { showMessage } from 'react-native-flash-message'
// styling
import styles from '../styles/styles'
// Custom components
import LoadingBar from '../components/LoadingBar'
import { AppContext } from '../styles/DynamicThemeProvider'
import ChangingBackground from '../components/ChangingBackground'
import CustomButtonPrimary from '../components/CustomButtonPrimary'
// Apollo
import {
    useMutation,
    useQuery
} from '@apollo/client'
import { USER } from '../apollo/gql/user/queries'
import { CREATE_ONE_POST } from '../apollo/gql/post/mutations'

const AddPost = ({ navigation }) => {
    const context = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [userId, setUserId] = useState('')

    const textInputStyle = {
        width: '100%',
        backgroundColor: 'transparent',
        color: context.theme.colors.textColor
    }
    const textInputTheme = {
        colors: {
            primary:
                context.theme.colors.textColor,
            underlineColor:
                context.theme.colors.textColor,
            text: context.theme.colors.textColor,
            placeholder:
                context.theme.colors.textColor
        }
    }

    const { loading: userLoading } = useQuery(
        USER,
        {
            onCompleted: ({ user }) => {
                setUserId(user.id)
            },
            onError: () => {}
        }
    )

    const [
        save,
        { loading: saveLoading }
    ] = useMutation(CREATE_ONE_POST, {
        onCompleted: ({ createOnePost }) => {
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
                    user: {
                        connect: { id: userId }
                    }
                }
            }
        })
    }

    if (userLoading || saveLoading)
        return <LoadingBar />

    return (
        <View style={{ flex: 1 }}>
            <ChangingBackground />
            <View
                style={{
                    ...styles.container,
                    backgroundColor:
                        context.theme.colors
                            .cardColor
                }}
            >
                <View
                    style={{
                        flex: 1,
                        width: '85%'
                    }}
                >
                    <TextInput
                        onChangeText={(text) =>
                            setTitle(text)
                        }
                        value={title}
                        label={'Название поста'}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        style={textInputStyle}
                        theme={textInputTheme}
                    />
                    <TextInput
                        onChangeText={(text) =>
                            setText(text)
                        }
                        value={text}
                        label={'Текст'}
                        underlineColor={
                            context.theme.colors
                                .textColor
                        }
                        multiline={true}
                        style={textInputStyle}
                        theme={textInputTheme}
                    />

                    <View
                        style={{
                            marginTop: 24,
                            alignItems: 'center'
                        }}
                    >
                        <CustomButtonPrimary
                            text={'Опубликовать'}
                            onPress={onSave}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default AddPost
