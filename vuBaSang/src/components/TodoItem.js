import React, { useState, useEffect } from 'react'
import styles from '../styles/styles'
import { Card, Checkbox } from 'react-native-paper'

const TodoItem = (props) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        props.item.completed
            ? setChecked(true)
            : setChecked(false)
    }, [])

    return (
        <Card style={styles.styleCard}>
            <Card.Content style={styles.contentCard}>
                <Card.Title
                    title={props.item.title}
                    titleNumberOfLines={2}
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
                            color='green'
                        />
                    )}
                />
            </Card.Content>
        </Card>
    )
}
export default TodoItem