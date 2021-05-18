import React, { useState } from 'react';
import styles from '../styles/styles'
import { ImageBackground, View, Text, StyleSheet, Button, Alert } from 'react-native';
import BackgroundBox from "../components/backgroundBox";

const image1 = { uri: 'https://background.su/files/contents/85/bg5e7b5975c85f9.jpg' };
const image2 = { uri: 'https://images.hdqwalls.com/download/walking-towards-sun-4k-5g-360x640.jpg' };

const Lab2 = () => {
    const [image, setImage] = useState(image1)

    const changeBackground1 = () => {
        setImage(image1)
        global.foo = image1
    }
    const changeBackground2 = () => {
        setImage(image2)
        global.foo = image2
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={image}
                blurRadius={1}>
                <BackgroundBox image="1" onPress={changeBackground1} />
                <BackgroundBox image="2" onPress={changeBackground2} />
            </ImageBackground>
        </View>
    );
};

export default Lab2