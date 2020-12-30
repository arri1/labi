import React, {useState} from 'react';
import {ImageBackground, View, Text, StyleSheet, Button, Alert} from 'react-native';
import styles from '../styles/styles'
import BackgroundBox from "../components/backgroundBox"

const image1 = { uri : 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'};
const image2 = { uri : 'https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg'}

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