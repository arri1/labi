import React, { useState, useEffect } from 'react'
import {StyleSheet, Text, TouchableOpacity, View, ImageBackground} from "react-native";
import { randomImage } from './catbg'
export default function TodoItem({item, pressHandler}){
        
    const [imgUri, setImgUri] = useState(() =>randomImage(10))
    
    useFocusEffect(
        React.useCallback(() => {
            return () => setImgUri(() => randomImage(10))
            }, [])
        )

    return(  
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <View style={styles.item}>
                    <Text>{item.text}</Text>
                    <ImageBackground source={{uri:imgUri}} style={{width: '100%', height: '100%', paddingBottom: 10}}/>
                </View>
            </TouchableOpacity>        
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        width: '100%',
        height: 300
    }
})