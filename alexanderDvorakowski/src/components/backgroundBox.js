import React, {useState , useEffect} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native'
import styles from "../styles/styles"

const image1 = { uri : 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg'};
const image2 = { uri : 'https://novacatclinic.com/wp-content/uploads/2020/03/AdobeStock_320738759-scaled.jpeg'}

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
                    borderRadius: 20
                }}
                source = {background(props.image)}>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}
export default BackgroundBox