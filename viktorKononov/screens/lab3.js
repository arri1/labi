import React, {useState , useEffect} from 'react';
import {Text, View, ActivityIndicator, StyleSheet, ScrollView, Alert, ImageBackground} from 'react-native';
import axios from 'axios'
import ToDoItem from '../components/ToDoItem'
import { useFocusEffect } from '@react-navigation/native'
import colors from '../colors/colors';

const image1 = { uri : 'https://images.unsplash.com/photo-1556861460-7d38b2955d05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80'};
const image2 = { uri : 'https://images.unsplash.com/photo-1559513455-6b937d16d16a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'}


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
          height:'100%',
      }}
        source = {image}
        blurRadius = {1}/>
        <View style = {styles.innerContainer}>
        <View style = {styles.container2}><Text style = {styles.text}>Список дел</Text></View>
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
    </View>
  )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    scrollview: {
        width: '100%'
    },
    innerContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.73)'
    },
    text:{
        fontFamily: 'Lato-Regular',
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 22,
        fontSize: 36,
        color: colors.grey,
        textAlign: 'left',
      }
})
export default Lab3 