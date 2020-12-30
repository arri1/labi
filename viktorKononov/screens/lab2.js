import React, {useState} from 'react';
import {ImageBackground, View, Text, StyleSheet, Button, Alert} from 'react-native';
import colors from '../colors/colors';
import BackgroundBox from "../components/backgroundBox"

const image1 = { uri : 'https://images.unsplash.com/photo-1561835269-1a0a93e1a0d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80'};
const image2 = {uri : 'https://images.unsplash.com/photo-1554328103-f1ab574c5a12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=564&q=80'};

const Lab2 = (navigation) => {
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
        source = {image}
        style = {styles.backgroundImage}
        blurRadius = {1}>
          <View style = {styles.innerContainer}>
            <View style = {styles.container2}><Text style = {styles.text}>Задний фон</Text></View>
            <View style = {styles.container3}>
              <BackgroundBox image="1" onPress={changeBackground1}/>
              <BackgroundBox image="2" onPress={changeBackground2}/>
            </View>
          </View>
      </ImageBackground>
    </View>
  )
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    alignItems: 'center',
  },
  container2: {
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container3: {
    marginTop: 110,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

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
    fontSize: 36,
    color: colors.grey,
    textAlign: 'left',
  }
})
export default Lab2;