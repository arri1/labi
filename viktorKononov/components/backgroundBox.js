import React, {useState , useEffect} from 'react';
import {ImageBackground, TouchableOpacity, View, StyleSheet} from 'react-native'

const image1 = { uri : 'https://images.unsplash.com/photo-1561835269-1a0a93e1a0d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80'};
const image2 = {uri : 'https://images.unsplash.com/photo-1554328103-f1ab574c5a12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=564&q=80'};

const background = (image) =>{
    if (image == "1") return image1
    else return image2
}
const BackgroundBox = (props) =>{
    return (
        <View style = {styles.containerLab2}>
            <TouchableOpacity
            style = {styles.itemLab2}
            onPress={props.onPress}>
                <ImageBackground
                style = {styles.backgroundImage}
                imageStyle={{

                }}
                source = {background(props.image)}>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerLab2:{
        flex: 1,
        width: '100%',
    },
    itemLab2: {
        flex: 1,
        minHeight: 220,
        borderRadius: 20,
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%',
      alignItems: 'center'
    },
})

export default BackgroundBox 