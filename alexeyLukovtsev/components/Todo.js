import React, { useState } from 'react'
import {TextInput, StyleSheet} from 'react-native'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

const Todo = () => {
    const [todoItems, setTodoItems] = useState (() => [
        { id: uuidv4(), title: 'Сделать Фигму', isComplete: false},
        { id: uuidv4(), title: 'Задача 2', isComplete: false},
        { id: uuidv4(), title: 'Задача 3', isComplete: false},
        { id: uuidv4(), title: 'Задача 4', isComplete: false}
    ])
    const [text, setText] = useState('')

    const changeText = text => setText(text)

    const addTodoItem = () =>{
        if(text.length > 0){
            setTodoItems([
                ...todoItems,
                { id: uuidv4(), title: text, isComplete: false}
            ])
        }
        setText('')
    }

    const completeTodoItem = id => setTodoItems(todoItems.map(
        todoItem => todoItem.id === id
            ? { ...todoItem, isComplete: !todoItem.isComplete}
            : todoItem
    ))

    const removeTodoItem = id => setTodoItems(
        todoItems.filter(todoItem => todoItem.id !== id)
    )

    return (
        <>
            <TodoList
                todoItems={todoItems}
                completeTodoItem={completeTodoItem}
                removeTodoItem={removeTodoItem}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Добавить задачу..."  
                value={text}
                onChangeText={changeText}
                onSubmitEditing={addTodoItem} 
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

export default Todo