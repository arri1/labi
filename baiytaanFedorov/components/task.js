import React, { useState, useEffect } from 'react';
import { ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import TaskList from './taskList';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Task = () => {
    const [taskItems, setTaskItems] = useState(() => [
        { id: uuidv4(), title: 'Задача 1', completed: false },
        { id: uuidv4(), title: 'Задача 2', completed: false }
    ])

    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(({ data }) => {
            setData(data);
            setTaskItems(data);
            // data.forEach(element => {
            //     setTaskItems([
            //         ...taskItems,
            //         { id: uuidv4(), title: element.title, isComplete: false }
            //     ])
            // });
        }).catch((e) => {
            console.error(e.message)
        })
    })

    const [text, setText] = useState('')

    const changeText = text => setText(text)

    const addTaskItem = () => {
        if (text.length > 0) {
            setTaskItems([
                ...taskItems,
                { id: uuidv4(), title: text, completed: false }
            ])
        }
        setText('')
    }

    const completeTaskItem = id => setTaskItems(taskItems.map(
        taskItem => taskItem.id === id
            ? { ...taskItem, completed: !taskItem.completed }
            : taskItem
    ))

    const removeTaskItem = id => setTaskItems(
        taskItems.filter(taskItem => taskItem.id !== id)
    )

    return (
        <>
            {data ?
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
                :
                <ActivityIndicator color={'gray'} />
            }
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
