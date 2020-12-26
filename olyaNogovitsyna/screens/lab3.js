import React,{useEffect,useState} from 'react'
import {View,ScrollView} from "react-native";
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
    return(
        <ScrollView>
            {data.map(item=>{
                return(
                    <Item
                        title={item.title}
                        text={item.body}
                    />
                )
            })}
        </ScrollView>
    )
}
export default Lab3