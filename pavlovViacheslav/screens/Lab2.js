import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  changeToRandomColor:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 150,
    maxHeight: 150,
    backgroundColor: "red",
    borderRadius: 25,
    marginTop: 10,
  },
  centrify:{
    flex:1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  txtContainer:{
    flex:1,
    justifyContent: "center",
    maxHeight: 100,
    maxWidth: 100,
  },
  containers:{
    flexDirection: "row",
  },
})

const Lab2 = () => {
  const [Color, setBackroundColor] = useState('#000000')

  //16777215 equals #FFFFF
  const colorId = () => setBackroundColor('#'+Math.floor(Math.random()*16777215).toString(16));

  return(
    <>
      <View style={styles.centrify}>
        <View style={styles.txtContainer}></View>
          <View style={styles.containers}>
            <TouchableOpacity onPress={colorId} style={styles.changeToRandomColor, {backgroundColor: Color}}>
              <Text>Change Color</Text>
            </TouchableOpacity>
          </View>
      </View>
    </>
  )
}

export default lab2;