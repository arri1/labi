import React, {useState , useEffect} from 'react';
import {ImageBackground,View, ActivityIndicator, StyleSheet, ScrollView, Alert} from 'react-native';
import styles from '../styles/styles'
import axios from 'axios'
import ToDoItem from '../components/ToDoItem'
import { useFocusEffect } from '@react-navigation/native'

const image1 = { uri : 'https://images.unsplash.com/photo-1562408583-dc1b9836596c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'}
const image2 = { uri : 'https://images.unsplash.com/photo-1456242951842-39924e7a7876?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80'}

const Lab3 = () => {
  const [data, setData] = useState(null)
  
  const [image, setImage] = useState(image1)

  useEffect(() =>{
    axios
      .get('http://jsonplaceholder.typicode.com/todos')
      .then(({ data }) => {
          const lessData = data.filter(
              (item) => item.id <= 10
          )
          setData(lessData)
      })
      .catch((error) => {
          console.error(error.message)
      })
  },[])
  useFocusEffect(
    React.useCallback(()=>{
      setImage(global.foo)
    },[])
  )

  const content = () => (
    <ScrollView style={styles.scrollview}>
      {
        data.map(
          (item,index)=>{
            return(
              <ToDoItem
                key={index}
                item={item}
              />
            )
          }
        )
      }
    </ScrollView>
  )
  return (
    <View style={styles.container}>
      <ImageBackground
        style = {{
          position:'absolute',
          width:'100%',
          height:'100%'
      }}
        source = {image}
        blurRadius = {1}/>
        {
          data ?
              (content()) : 
                (
                  <ActivityIndicator
                      size={70}
                      color={'grey'}
                  />
                )
        }
    </View>
  )
}
export default Lab3