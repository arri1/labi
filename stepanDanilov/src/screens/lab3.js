import React, {useState , useEffect} from 'react';
import {Image, View, ActivityIndicator, StyleSheet, ScrollView, Alert, ImageBackground} from 'react-native';
import styles from '../styles/styles'
import axios from 'axios'
import ToDoItem from '../components/ToDoItem'

const image1 = { uri : 'https://images.unsplash.com/photo-1556861460-7d38b2955d05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80'};
const image2 = { uri : 'https://images.unsplash.com/photo-1559513455-6b937d16d16a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'}


const Lab3 = () => {
  const [data, setData] = useState(null)

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
        source = {global.foo}
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