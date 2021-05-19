import React, {useState} from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Button 
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Lab2 = () =>{    
  const handle = () => false
  const [backgroundColor, setBackgroundColor] = useState('black')
  return(
    <View style={{ flex: 1,  justifyContent: 'center' }}>
      <View style={[{ backgroundColor }]}>
        <View>
          <Button 
            onPress={() =>{
              setBackgroundColor(Math.floor(Math.random() * 99999))
            }}
            title="color"
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
    </View>
  )
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
  nav: {
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingTop: 10,
  },
})

export default Lab2;