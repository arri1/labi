import React, {useState , useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, ScrollView, Alert} from 'react-native';
import styles from '../styles/styles'
import axios from 'react-native-axios'
import ToDoItem from '../components/ToDoItem'


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
    <View style={styles.containerLab3}>
        {
            data ?
                (content()
                ) : (
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