import React, { useState, useEffect } from 'react'
// React paper
import {
    Card,
    Checkbox
} from 'react-native-paper'
// styling
import styles from '../styles/styles'

const TodoItem = (props) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        props.item.completed
            ? setChecked(true)
            : setChecked(false)
    }, [])

    return (
        <Card style={styles.item}>
            <Card.Title
                title={props.item.title}
                titleNumberOfLines={2}
                titleStyle={styles.regularText}
                right={() => (
                    <Checkbox
                        status={
                            checked
                                ? 'checked'
                                : 'unchecked'
                        }
                        onPress={() => {
                            setChecked(!checked)
                        }}
                        color="green"
                    />
                )}
            />
        </Card>
    )
}

export default TodoItem
