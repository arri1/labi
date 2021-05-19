import React, {useState , useEffect} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native'
import styles from "../styles/styles"

const image1 = { uri : 'https://3.bp.blogspot.com/-cA26SH7yTRI/XG1w2RS57LI/AAAAAAAAG7Q/OyYpfS5U1A42C_MCY1M6nuxKbI0jsXZegCHMYCw/s1600/aero-pink-and-purple-%25E2%259D%25A4-4k-hd-desktop-wallpaper-for-4k-ultra-hd-tv.jpg'};
const image2 = {uri : 'https://i.pipec.info/20111212/76637018541922_obojka_(122).jpg'};

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