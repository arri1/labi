import React, { useState } from "react";
import {StyleSheet, Text, View, FlatList} from "react-native";
import TodoItem from './comp/todo';
import AddTodo from './comp/addTodo'

export default function App(){

  const [todos,setTodos] = useState([
    {text: 'Work', key: '1'},
  ])

  const submitHandler = (text) => {
      setTodos((prevTodos)=>{
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
  }

  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
})