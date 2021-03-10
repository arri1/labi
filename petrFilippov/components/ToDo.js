import React, { useEffect, useState } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import ToDoList from './ToDoList'
import axios from 'axios'

const ToDo = () => {
    const [todoItems, setToDoItems] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(({ data }) => {
            const lessData = data.filter(
                (item) => item.id <= 20
            )
            setToDoItems(lessData);
        }).catch((e) => {
            console.error(e.message)
        })
    })

    return (
        <>
            {todoItems ?
                <>
                    <ToDoList
                        todoItems={todoItems}
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

export default ToDo;