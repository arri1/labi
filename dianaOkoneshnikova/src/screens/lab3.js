import React, {useState , useEffect} from 'react';
import {Image, View, ActivityIndicator, StyleSheet, ScrollView, Alert, ImageBackground} from 'react-native';
import styles from '../styles/styles'
import axios from 'react-native-axios'
import ToDoItem from '../components/ToDoItem'
import { useFocusEffect } from '@react-navigation/native'

const image1 = { uri : 'https://i.pinimg.com/originals/97/bd/c1/97bdc1df9c28dffc02618004b9a7961b.jpg'};
const image2 = { uri : 'https://www.worthavegroup.com/media/wysiwyg/img-pages/FreeWallpaper-PhoneTablet-47_th.jpg'}

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
    const renderItems = () => {
        return (
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
    }
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
            {data ? renderItems() : <ActivityIndicator size={60} color={'red'} />}
        </View>
    )
}
export default Lab3