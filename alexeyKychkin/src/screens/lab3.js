import React, {useState , useEffect} from 'react';
import {Image, View, ActivityIndicator, StyleSheet, ScrollView, Alert, ImageBackground} from 'react-native';
import styles from '../styles/styles'
import axios from 'axios'
import ToDoItem from '../components/ToDoItem'
import { useFocusEffect } from '@react-navigation/native'

const image1 = { uri : 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'};
const image2 = { uri : 'https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg'}


const Lab3 = () => {
  const [data, setData] = useState(null)
  const [image, setImage] = useState(null)

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