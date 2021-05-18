import React,{useEffect,useState} from 'react'
import {View,ScrollView, Text, ActivityIndicator, StyleSheet} from "react-native";
import axios from "react-native-axios";
import Item from '../components/item'

const Lab3 = ()=>{
    //console.log('test');
    const [data,setData]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({data})=>{
            setData(data)
        })
        .catch(e=>{
            console.log(e.message)
        })
        
    },[])

    const renderItems = () => {   
        return(
            <ScrollView>
                {
                    data.map(item=>{
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
            {data? renderItems(): <ActivityIndicator size={75} color={'yellow'}/>}
        </View>
    )
}
const styles=StyleSheet.create({
    item: {
        flex: 1,
        minHeight:175,
        margin: 20,
        padding: 20,
        borderRadius: 60,
        borderStyle:  "solid",
        borderWidth:3,
        borderColor: '#00B4FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize:40,
        fontWeight: "bold",
        fontFamily:'Times New Roman',
     },

    text:{
        fontSize:30,
        fontWeight: 'normal',
        fontFamily:'Times New Roman',
     },
    })

export default Lab3