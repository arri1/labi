import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

const lab2 = () => {
   const [backgroundColor, setBackgroundColor] = useState('red')
   return (
      <View style = {styles.container,{backgroundColor}}>
         
         <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (backgroundColor == 'red') {
            setBackgroundColor('blue')
          }
          else setBackgroundColor('red')
        }}
        ></TouchableOpacity>
         
      </View>
   )
}

const styles = StyleSheet.create ({
   
   button: {
      alignItems: "center",
      padding: 400
    },
})

export default lab2