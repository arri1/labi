import React, {
    useContext,
    useState,
    useEffect
} from 'react'
import { View } from 'react-native'
// React paper
import {
    Card,
    Checkbox
} from 'react-native-paper'
// styling
import styles from '../styles/styles'
import { AppContext } from '../styles/DynamicThemeProvider'

const TodoItem = (props) => {
    const [checked, setChecked] = useState(false)
    const context = useContext(AppContext)

    useEffect(() => {
        props.item.completed
            ? setChecked(true)
            : setChecked(false)
    }, [])

    return (
        <View>
            <Card
                style={{
                    ...styles.todoItem,
                    backgroundColor:
                        context.theme.colors
                            .cardColor
                }}
            >
                <Card.Title
                    title={props.item.title}
                    titleNumberOfLines={2}
                    titleStyle={{
                        ...styles.todoItemText,
                        color:
                            context.theme.colors
                                .textColor
                    }}
                    right={() => (
                        <Checkbox
                            status={
                                checked
                                    ? 'checked'
                                    : 'unchecked'
                            }
                            onPress={() => {
                                setChecked(
                                    !checked
                                )
                            }}
                            color={
                                context.theme
                                    .colors
                                    .gradient1
                            }
                        />
                    )}
                />
            </Card>
        </View>
    )
}

export default TodoItem
