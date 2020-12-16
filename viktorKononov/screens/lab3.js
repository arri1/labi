import React, { useState, useEffect } from 'react'
import { ScrollView, View,Text, ActivityIndicator, StyleSheet } from 'react-native'
import axios from 'react-native-axios'

const Lab3 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const {data:currentData} = await axios.get('http://jsonplaceholder.typicode.com/todos')
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
        margin: 10,
        padding: 10,
        borderRadius: 40,
        borderStyle:  "solid",
        borderWidth:3,
        borderColor: '#ff9233',
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
     },})
export default Lab3 