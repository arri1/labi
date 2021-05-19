import React, {useState} from 'react';
import {ImageBackground, View, Text, StyleSheet, Button, Alert} from 'react-native';
import styles from '../styles/styles'
import BackgroundBox from "../components/backgroundBox"

const image1 = { uri : 'https://i.pinimg.com/originals/97/bd/c1/97bdc1df9c28dffc02618004b9a7961b.jpg'};
const image2 = { uri : 'https://www.worthavegroup.com/media/wysiwyg/img-pages/FreeWallpaper-PhoneTablet-47_th.jpg'}

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