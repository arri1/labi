import React, {useState , useEffect} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native'
import styles from "../styles/styles"

const image1 = { uri : 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500'};
const image2 = { uri : 'https://miro.medium.com/max/1280/1*b1mRX7FOPZvSdF-Q6ivbiw.png'}

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