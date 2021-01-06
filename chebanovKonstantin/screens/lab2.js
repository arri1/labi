import React, {useState} from 'react';
import {ScrollView, StyleSheet, View,TouchableOpacity,Text, ImageBackground } from "react-native"

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
        <View style = {styles.container}>
            <ScrollView>
                {data.map(
                    (item) => {
                        return (   
                                <TouchableOpacity       
                                style={[styles.item, { backgroundColor }]}                           
                                        onPress={() => {
                                        setBackgroundColor(item.backgroundColor)
                                        }}>
                                            <ImageBackground
                                                style={styles.backgroundImage}   
                                                imageStyle={{ borderRadius: 20}}  
                                                source={require("../resources/image2.jpg")}
                                            >
                                                    <View
                                                    style={{
                                                        flex: 1,
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        backgroundColor: backgroundColor,
                                                        borderRadius: 20,
                                                        opacity: 0.5
                                                    }}
                                                    >
                                                        <Text style={[styles.text,{color:item.backgroundColor}]}>
                                                        {item.backgroundColor}
                                                        </Text>
                                                    </View>
                                            </ImageBackground>
                                </TouchableOpacity>
                            )  
                    })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 600,
        borderRadius: 20
    },
    text:{
        fontSize:30,
        fontWeight: "bold",
        fontFamily:'Times New Roman',
        textShadowColor:'#000000',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:5,
     },
     
     backgroundImage: {
        flex: 1,
        width: '100%'  
    },
     item:{
        flex: 1,
        minHeight: 235,
        borderRadius: 30,
        margin: 25,
        marginBottom: 0,
        marginTop: 25,
     }
})

export default Lab2