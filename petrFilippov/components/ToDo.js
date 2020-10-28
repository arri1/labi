import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import ToDoList from './ToDoList'
import { v4 as uuidv4 } from 'uuid';
import ToDoItem from './ToDoItem';

const ToDo = () => {
    const [todoItems, setToDoItems] = useState(() => [
        { id: uuidv4(), title: 'Задача 1', isComplete: false },
        { id: uuidv4(), title: 'Задача 2', isComplete: false }
    ])
    const [text, setText] = useState('')

    const changeText = text => setText(text)

    const addTodoItem = () => {
        if(text.length > 0) {
            setToDoItems([
                ...todoItems,
                { id: uuidv4(), title: text, isComplete: false }
            ])
        }
        setText('')
    }

    const completeTodoItem = id => setToDoItems(todoItems.map(
        ToDoItem => ToDoItem.id === id
            ? { ...ToDoItem, isComplete: !ToDoItem.isComplete }
            : ToDoItem
    ))

    const removeTodoItem = id => setToDoItems(
        todoItems.filter(ToDoItem => ToDoItem.id !== id )
    )
    return(
        <>
            <ToDoList 
                todoItems={todoItems}
                completeTodoItem={completeTodoItem}
                removeTodoItem={removeTodoItem}
            />
            <TextInput 
                style={styles.textInput}
                placeholder="Добавить задачу"
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

export default ToDo;