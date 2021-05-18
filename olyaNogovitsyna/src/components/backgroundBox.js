import React, {useState , useEffect} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native'
import styles from "../styles/styles"

const image1 = { uri : 'https://w-dog.ru/wallpapers/15/6/542818431002571.jpg'};
const image2 = { uri : 'https://img.megaobzor.com/old/load/wtf/06_2010/19/peyzagi_1680x1050/1.jpg'}

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