import React, { useState, useEffect } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native'
import styles from "../styles/styles"

const image1 = { uri: 'https://background.su/files/contents/85/bg5e7b5975c85f9.jpg' };
const image2 = { uri: 'https://images.hdqwalls.com/download/walking-towards-sun-4k-5g-360x640.jpg' };

const background = (image) => {
    if (image == "1") return image1
    else return image2
}
const BackgroundBox = (props) => {
    return (
        <View style={styles.containerLab2}>
            <TouchableOpacity
                style={styles.itemLab2}
                onPress={props.onPress}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={background(props.image)}>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}
export default BackgroundBox