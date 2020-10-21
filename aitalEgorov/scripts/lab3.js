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

const Lab3 = () =>{    
  const handle = () => false
  const [backgroundColor, setBackgroundColor] = useState('black')
  return(
    <View style={{ flex: 1,  justifyContent: 'center' }}>
      <View style={[styles.text, { backgroundColor }]}>
        <View>
          <Button 
            onPress={() =>{
              setBackgroundColor(Math.floor(Math.random() * 99999))
            }}
            title="color"
          />
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
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 40,
    padding: 120,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'times new roman',
    fontStyle: 'italic',
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

export default Lab3;