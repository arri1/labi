import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import TaskList from './lab4list';
import axios from 'axios';

const Task = () => {
    const [taskItems, setTaskItems] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(({ data }) => {
            const lessData = data.filter(
                (item) => item.id <= 40
            )
            setTaskItems(lessData);
        }).catch((e) => {
            console.error(e.message)
        })
    })

    return (
        <>
            {taskItems ?
                <>
                    <TaskList
                        taskItems={taskItems}
                    />
                </>
                :
                <ActivityIndicator color={'gray'} />
            }
        </>
    )
}

export default Task;