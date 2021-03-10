import React, { useState, useEffect } from 'react'
import { ScrollView, View,Text, ActivityIndicator, StyleSheet } from 'react-native'
import axios from 'axios'

const Lab3 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const {data:currentData} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log('currentData', currentData)
            if (currentData) setData(currentData)
        }
        getData()
    }, [])

    const renderItems = () => {
        return (
            <ScrollView>
                {
                    data.map((item) => {
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
                    })
                }
            </ScrollView>
        )
    }
    return (
        <View style={styles.container}>
            {data? renderItems(): <ActivityIndicator size={60} color={'red'}/>}
        </View>
    )

}
const styles=StyleSheet.create({
    item: {      
        flex: 1,
        minHeight:175,
        margin: 13,
        padding: 20,
        borderRadius: 40,
        backgroundColor: '#000fff',
        alignItems: 'center',
        justifyContent: 'center',     
    },
    text:{
        fontSize:15,
        color:'#FFFFFF',
     },
     title: {
        fontSize:20,
        fontWeight: "bold",
        color:'#FFFFFF',
     },
     container:{
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center'
    },})
export default Lab3