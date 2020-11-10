import React, { useState, useEffect } from 'react'
import styles from '../styles/styles'
import { Card, Checkbox } from 'react-native-paper'
import colors from '../styles/colors'

const TodoItem = (props) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        props.item.completed
            ? setChecked(true)
            : setChecked(false)
    }, [])

    return (
        <Card style={styles.cardStyle}>
            <Card.Content style={styles.cardContent}>
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
                            color={colors.green}
                        />
                    )}
                />
            </Card.Content>
        </Card>
    )
}

export default TodoItem