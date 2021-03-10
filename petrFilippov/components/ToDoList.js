import React from 'react'
import { ScrollView } from 'react-native'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todoItems, completeTodoItem, removeTodoItem }) => (
    <ScrollView>
        {todoItems.map(item => (
            <ToDoItem
                key={item.id}
                title={item.title}
                isComplete={item.isComplete}
            />
        ))}
    </ScrollView>
)
export default ToDoList