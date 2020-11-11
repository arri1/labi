import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import TaskList from './lab4taskList';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const Task = () => {
    const [taskItems, setTaskItems] = useState(() => [
        { id: uuidv4(), title: 'Задача 1', isComplete: false },
        { id: uuidv4(), title: 'Задача 2', isComplete: false }
    ])

    const [text, setText] = useState('')

    const changeText = text => setText(text)

    const addTaskItem = () => {
        if (text.length > 0) {
            setTaskItems([
                ...taskItems,
                { id: uuidv4(), title: text, isComplete: false }
            ])
        }
        setText('')
    }

    const completeTaskItem = id => setTaskItems(taskItems.map(
        taskItem => taskItem.id === id
            ? { ...taskItem, isComplete: !taskItem.isComplete }
            : taskItem
    ))

    const removeTaskItem = id => setTaskItems(
        taskItems.filter(taskItem => taskItem.id !== id)
    )

    return (
        <>
            <TaskList
                taskItems={taskItems}
                completeTaskItem={completeTaskItem}
                removeTaskItem={removeTaskItem}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Добавить задачу . . ."
                value={text}
                onChangeText={changeText}
                onSubmitEditing={addTaskItem}
            />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        borderWidth: StyleSheet.hairlineWidth
    }
})

export default Task;
