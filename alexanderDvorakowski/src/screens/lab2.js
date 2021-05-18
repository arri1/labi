import React, {useState} from 'react';
import {ImageBackground, View, Text, StyleSheet, Button, Alert} from 'react-native';
import styles from '../styles/styles'
import BackgroundBox from "../components/backgroundBox"

const image1 = { uri : 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg'};
const image2 = { uri : 'https://novacatclinic.com/wp-content/uploads/2020/03/AdobeStock_320738759-scaled.jpeg'}

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
          <BackgroundBox image="1" onPress={changeBackground1}/>
          <BackgroundBox image="2" onPress={changeBackground2}/>
        </ImageBackground>
    </View>
  );
};

export default Lab2