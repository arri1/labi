import React, {useState} from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import {ScrollView, StyleSheet, View,TouchableOpacity,Text } from "react-native"

const data = [
    {
        backgroundColor: 'orange'
    },
    {
        backgroundColor: 'black'
    },
    {
        backgroundColor: 'red'
    },
    {
        backgroundColor: 'blue'
    },
    {
        backgroundColor: 'green'
    },
    {
        backgroundColor: 'white'
    },
    {
        backgroundColor: 'yellow'
    }

]


const Lab2 = (props)=>{
    const [backgroundColor, setBackgroundColor] = useState('black')
    return(
        <View style={styles.screen}>
            <ScrollView>
                {data.map(
                    (item) => {
                        return (
                            <View style = {[styles.container,{backgroundColor}]}>         
                                <TouchableOpacity                                  
                                        onPress={() => {
                                        setBackgroundColor(item.backgroundColor)
                                        }}>
                                    <Text style={[styles.text,{color:item.backgroundColor}]}>
                                        {item.backgroundColor}
                                    </Text>
                                </TouchableOpacity>
         
                            </View>)  
                    })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {      
        flex: 1,
        minHeight:150,
        margin: 24,
        padding: 20,
        borderRadius: 20,
        borderStyle:  "solid",
        borderWidth:5,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',     
    },
    text:{
        fontSize:100,
        fontWeight: "bold",
        fontFamily:'Times New Roman',
        textShadowColor:'#000000',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:5,
     },
     scren: {
        flex: 1
     }
})

export default Lab2