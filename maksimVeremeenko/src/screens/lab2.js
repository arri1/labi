import React, {useState} from 'react';
import {ImageBackground, View, Text, StyleSheet, Button, Alert} from 'react-native';
import styles from '../styles/styles'
import BackgroundBox from "../components/backgroundBox"

const image1 = { uri : 'https://3.bp.blogspot.com/-cA26SH7yTRI/XG1w2RS57LI/AAAAAAAAG7Q/OyYpfS5U1A42C_MCY1M6nuxKbI0jsXZegCHMYCw/s1600/aero-pink-and-purple-%25E2%259D%25A4-4k-hd-desktop-wallpaper-for-4k-ultra-hd-tv.jpg'};
const image2 = { uri : 'https://i.pipec.info/20111212/76637018541922_obojka_(122).jpg'}

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