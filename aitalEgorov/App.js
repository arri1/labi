import React, {Component} from 'react'
import { View, TouchableOpacity, TouchableNativeFeedback, Text, StyleSheet, Button, Alert } from 'react-native'

export default class ButtonBasics extends Component {  
  render(){
    const handlePress = () => false
    return(
      <View>
        <View style={styles.fixToText}>
        <Button
          title="Left button"
        />
        <Button
          onPress = {handlePress}
          title="Right button"
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
           <Text style = {styles.text}>
              Button
           </Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}



const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red'
   },
   fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})