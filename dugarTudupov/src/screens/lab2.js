import React, {useState} from 'react';
import {ImageBackground, View, Text, StyleSheet, Button, Alert} from 'react-native';
import styles from '../styles/styles'
import BackgroundBox from "../components/backgroundBox"

const image1 = { uri : 'https://images.unsplash.com/photo-1561069933-3323a3203b4f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'};
const image2 = { uri : 'https://images.unsplash.com/photo-1560993503-964a3e0df3ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}

const Lab2 = () => {
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
          <View style={styles.container2}>
          <BackgroundBox image="1" onPress={changeBackground1}/>
          <BackgroundBox image="2" onPress={changeBackground2}/></View>
        </ImageBackground>
    </View>
  );
};

export default Lab2