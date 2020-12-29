import React, { useState, useEffect } from 'react';
import { Image, View, ActivityIndicator, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native';
import styles from '../styles/styles'
import axios from 'axios'
import ToDoItem from '../components/ToDoItem'
import { useFocusEffect } from '@react-navigation/native'

const image1 = { uri: 'https://background.su/files/contents/85/bg5e7b5975c85f9.jpg' };
const image2 = { uri: 'https://images.hdqwalls.com/download/walking-towards-sun-4k-5g-360x640.jpg' };

const Lab3 = () => {
    const [data, setData] = useState(null)
    const [image, setImage] = useState(null)
    useFocusEffect(
        React.useCallback(() => {
            setImage(global.foo)
        }, [])
    )
    useEffect(() => {
        axios
            .get('http://jsonplaceholder.typicode.com/todos')
            .then(({ data }) => {
                const lessData = data.filter(
                    (item) => item.id <= 10
                )
                setData(lessData)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }, [])
    const content = () => (
        <ScrollView style={styles.scrollview}>
            {
                data.map(
                    (item, index) => {
                        return (
                            <ToDoItem
                                key={index}
                                item={item}
                            />
                        )
                    }
                )
            }
        </ScrollView>
    )
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }}
                source={image}
                blurRadius={1} />
            {
                data ?
                    (content()) :
                    (
                        <ActivityIndicator
                            size={70}
                            color={'grey'}
                        />
                    )
            }
        </View>
    )
}
export default Lab3