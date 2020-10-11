import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from "./taskItem";

const todoItems = [
    { id: 1, title: 'Задача 1', isComplete: false },
    { id: 2, title: 'Задача 2', isComplete: true },
    { id: 3, title: 'Задача 3', isComplete: false },
    { id: 4, title: 'Задача 4', isComplete: false },
    { id: 5, title: 'Задача 5', isComplete: true },
    { id: 6, title: 'Задача 6', isComplete: false },
    { id: 7, title: 'Задача 7', isComplete: false },
    { id: 8, title: 'Задача 8', isComplete: true },
    { id: 9, title: 'Задача 9', isComplete: false },
    { id: 10, title: 'Задача 10', isComplete: false }
]

const TaskList = () => {
    return (
        <FlatList
            data={todoItems}
            renderItem={({ item }) => (
                <TaskItem
                    title={item.title}
                    isComplete={item.isComplete}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default TaskList