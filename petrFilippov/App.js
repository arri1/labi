import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';


const styles = StyleSheet.create({
  plusMinusStyle:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 100,
    maxHeight: 100,
    backgroundColor: "purple",
    borderRadius: 25,
    marginTop: 10,
  },
  centrify:{
    flex:1,
    alignItems: "center",
    flexDirection: "column",
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
});
export class Touchables extends Component{
  _onPressButton(){
    alert('You tapped the button')
  }
}

const App = () => {
  const [count, setCount] = useState(0)

  const minusPress = () => setCount(prevCount => prevCount - 1);
  const plusPress = () => setCount(prevCount => prevCount + 1);

  return(
    <>
      <View style={styles.centrify}>
        <View style={styles.txtContainer}>
          <Text>Count: {count}</Text>
        </View>
        <View style={styles.containers}>
          <TouchableOpacity onPress={minusPress} style={styles.plusMinusStyle}>
            <Text>Minus</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={plusPress} style={styles.plusMinusStyle}>
            <Text>Plus</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={changeColor} style={styles.plusMinusStyle}>
            <Text>Change Color</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}



export default App;