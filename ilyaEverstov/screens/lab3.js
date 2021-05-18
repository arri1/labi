import React, {useEffect, useState} from 'react'
import {ActivityIndicator, ScrollView, StyleSheet, View,Text} from "react-native"
import axios from 'axios'

const styles = StyleSheet.create({
    item: {      
        flex: 1,
        minHeight:150,
        margin: 20,
        padding: 20,
        borderRadius: 20,
        borderStyle:  "solid",
        borderWidth:5,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',     
    },
    text:{
        fontSize:15,
        fontWeight: 'normal',
        fontFamily:'Times New Roman',     
     },
     title: {
        fontSize:20,
        fontWeight: "bold",
        fontFamily:'Times New Roman',
     },
})

const Lab3 = (props) => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => {
            setData(data)
            console.log(data)

        }).catch((e) => {
            console.error(e.message)

        })
    })

    const content = () => {
        return (
            <ScrollView>{
                data.map(
                    (item) => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.text}>
                                    {item.body}
                                </Text>
                            </View>
                        )
                    }
                )}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            {data ? content() : <ActivityIndicator size="large" color="#00ff00" />}
        </View>
    )
}
export default Lab3