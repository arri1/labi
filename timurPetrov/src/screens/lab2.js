import React, {useState} from 'react'
import {ImageBackground, View, Text, StyleSheet, Button, Alert} from 'react-native'
import styles from '../styles/styles'
import BackgroundBox from "../components/BackgroundBox"

const image1 = { uri : 'https://images.unsplash.com/photo-1562408583-dc1b9836596c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'}
const image2 = { uri : 'https://images.unsplash.com/photo-1456242951842-39924e7a7876?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80'}

function Lab2() {
  const [image, setImage] = useState(image1)
  const changeBackground1 = ()=>{
    setImage(image1)
    global.foo = image1
  }
  const changeBackground2 = ()=>{
    setImage(image2)
    global.foo = image2
  }
  return (
    <View style={styles.container}>
      <ImageBackground 
        style = {styles.backgroundImage}
        source = {image}
        blurRadius = {1}>
          <BackgroundBox image="1" onPress={changeBackground1}/>
          <BackgroundBox image="2" onPress={changeBackground2}/>
        </ImageBackground>
    </View>
  )
}

export default Lab2
