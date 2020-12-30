import React, { useState, useEffect } from 'react';
import styles from '../styles/styles'
import { Card } from 'react-native-paper'
import Checkbox from 'react-native-paper/src/components/Checkbox/Checkbox'

const ToDoItem = (props) => {
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
                            color='black'
                        />
                    )}
                />
            </Card.Content>
        </Card>
    )
};

export default ToDoItem 