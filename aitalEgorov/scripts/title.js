import React, {useState} from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Button,
  ImageBackground,
  Image,
  SafeAreaView, 
  ScrollView,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const figure = require('../img/title/figure.png');
const image = require('../img/title/background.jpg');
const Drawer = createDrawerNavigator();

const Title = () =>{    
  return(
    <View>
      <ImageBackground source={image} style={styles.main}>
        <View style={styles.groupFigure}>
          <Image source={figure}></Image>
        </View>
        <View style={styles.figure}></View>
        <Text style={styles.text}>Sensor-gas</Text>
      </ImageBackground>
      <TouchableOpacity style={styleButton.logIn}>
        <View style={styleButton.Roctangle}>
          <Text style={styleButton.logInText}>
            ВОЙТИ
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styleButton.logOut}>
        <View style={styleButton.Roctangle}>
          <Text style={styleButton.logOutText}>
            РЕГИСТРАЦИЯ
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styleButton = StyleSheet.create({
  logIn:{
    position: 'absolute',
    width: 167,
    height: 52,
    left: 34,
    top: 648,
  },
  logInText:{
    position: 'absolute',
    left: '35.93%',
    right: '36.53%',
    top: '36.54%',
    bottom: '34.62%',

    fontFamily: Platform.OS === 'android' ? 'Roboto-Bold' : 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.04,
    textTransform: 'uppercase',

    color: '#000000',
  },
  Roctangle:{
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',

    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: 6,
  },
  logOut:{
    position: 'absolute',
    width: 167,
    height: 52,
    left: 210,
    top: 649,
  },
  logOutText:{
    position: 'absolute',
    left: '20.96%',
    right: '20.96%',
    top: '36.54%',
    bottom: '34.62%',
    
    fontFamily: Platform.OS === 'android' ? 'Roboto-Bold' : 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.04,
    textTransform: 'uppercase',
    
    color: '#000000',
  },
})

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  
  main: {
    flex: 1,
    position: 'absolute',
    width: 411,
    height: 618,
    left: 0,
    top: 0,
  },
  text:{
    position: 'absolute',
    width: 277,
    height: 54,
    left: 72,
    top: 301,
    color: '#000000',

    fontFamily: Platform.OS === 'android' ? 'Comfortaa-Light' : 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 48,
    lineHeight: 54,
    /* identical to box height */
      
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: -0.015,
  },
  groupFigure:{
    position: 'absolute',
    width: 38,
    height: 38,
    left: 191,
    top: 263,
  }
})

export default Title;