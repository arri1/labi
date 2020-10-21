import React, { useState } from 'react'

import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';



const Lab2 = () => {

    const [color1, setColor1] = useState('#000000');
    const [color2, setColor2] = useState('#00FF00');
    const [color3, setColor3] = useState('#00FFFF');
    const [color4, setColor4] = useState('#FFA500');

    const randomHex = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
  
    return (
        <View style={
            { 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center' 
            }
        }>
    
            <View style={styles.blockRow}>
    
            <TouchableOpacity
                onPress={() => 
                {
                    setColor1(randomHex());
                }
                }>
    
                <View style={
                    {
                        ...styles.box,
                        backgroundColor: color1
                    }
                }/>
    
            </TouchableOpacity>
    
            <TouchableOpacity
                onPress={() => 
                {
                    setColor2(randomHex());
                }
                }>
    
                <View style={
                    {
                        ...styles.box,
                        backgroundColor: color2
                    }
                }/>
    
            </TouchableOpacity>
    
            </View>
    
            <View
            style={styles.blockRow}>
    
            <TouchableOpacity
                onPress={() => 
                {
                    setColor3(randomHex());
                }
                }>
    
                <View style={
                    {
                        ...styles.box,
                        backgroundColor: color3
                    }
                }/>
    
            </TouchableOpacity>
    
            <TouchableOpacity
                onPress={() => 
                {
                    setColor4(randomHex());
                }
                }>
    
                <View style={
                    {
                        ...styles.box,
                        backgroundColor: color4
                    }
                }/>
                
    
            </TouchableOpacity>
    
            </View>
    
        </View>
    );
  }

const styles = StyleSheet.create({

    blockRow: {
        flexDirection: 'row',
    },
  
    box: {
        width: 120,
        height: 120
    }
    
  });

export default Lab2