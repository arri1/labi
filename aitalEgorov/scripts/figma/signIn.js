import React, {useState} from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
const image = require('../../img/icon/back.png');

const signIn = () =>{ 
  const [valueEmail, EmailText] = React.useState('jane@example.com');   
  const [valuePassword, PasswordText] = React.useState('**********');  
  return(
    <View>
      <View style={styles.back}>
        <Image source={image} style={styles.iconBack}></Image>
      </View>
      <View style={styles.textViewReg}>
        <Text style={styles.textRegis}>Войти</Text>
      </View>
      <View style={styleTextInput.email}>
        <TextInput
          style={styleTextInput.Win}
          onChangeText={text=>EmailText(text)}
          value={valueEmail}
        />
      </View>
      <View style={styleTextInput.passwort}>
        <TextInput
          style={styleTextInput.Win}
          onChangeText={text=>PasswordText(text)}
          value={valuePassword}
        />
      </View>
      <TouchableOpacity style={styleButton.sign}>
        <View style={styleButton.signRo}>
          <Text style={styleButton.signText}>
            Войти
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styleTextInput = StyleSheet.create({
    email:{
      position: 'absolute',
      width: 343,
      height: 52,
      left: 34,
      top: 212,
    },
    Win:{
      position: 'absolute',
      left: '0%',
      right: '0%',
      top: '0%',
      bottom: '0%',
      
      backgroundColor: '#FFFFFF',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: '#000000',
    },
    passwort:{
      position: 'absolute',
      width: 343,
      height: 52,
      left: 34,
      top: 288,
    },
    passwortContr:{
      position: 'absolute',
      width: 343,
      height: 52,
      left: 34,
      top: 365,
    }
  })
  
  const styleButton = StyleSheet.create({
    sign:{
      position: 'absolute',
      width: 343,
      height: 52,
      left: 28,
      top: 455,
    },
    signRo:{
      position: 'absolute',
      left: '0%',
      right: '0%',
      top: '0%',
      bottom: '0%',
      
      backgroundColor: '#5A6AA3',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: '#5A6AA3',
  
      borderRadius: 6,
    },
    signText:{
      position: 'absolute',
      left: '6.12%',
      right: '6.41%',
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
  
  const styles = StyleSheet.create({
    back:{
      position: 'absolute',
      width: 12.21,
      height: 11.35,
      left: 21,
      top: 21.71,
    },
    iconBack:{
      position: 'absolute',
      width: 11,
      height: 11,
      left: 21.71,
      top: 21.71,
      
      borderWidth: 1,
      borderColor: '#FFFFFF',
    },
    logIn:{
      position: 'absolute',
      width: 167,
      height: 52,
      left: 34,
      top: 648,
    },
    textRegis:{
      position: 'absolute',
      left: '0%',
      right: '-74.32%',
      top: '0%',
      bottom: '0%',
      
      fontFamily: Platform.OS === 'android' ? 'Comfortaa-Light' : 'Comfortaa',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 36,
      lineHeight: 40,
      display: 'flex',
      alignItems: 'center',
      letterSpacing: -0.015,
      
      color: '#000000',
    },
    textViewReg:{
      position: 'absolute',
      width: 258,
      height: 40,
      left: 27,
      top: 108,
    },
  })
export default signIn;