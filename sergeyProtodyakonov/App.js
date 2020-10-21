import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Lab2Screen() {

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

      <View
        style={styles.blockRow}>

        <TouchableOpacity
          onPress={() => 
            {
              setColor1(randomHex());
            }
          }>

          <View
            style={
              {
                backgroundColor: color1,
                width: 120,
                height: 120
              }
            }>
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => 
            {
              setColor2(randomHex());
            }
          }>

          <View
            style={
              {
                backgroundColor: color2,
                width: 120,
                height: 120
              }
            }>
          </View>

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

          <View
            style={
              {
                backgroundColor: color3,
                width: 120,
                height: 120
              }
            }>
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => 
            {
              setColor4(randomHex());
            }
          }>

          <View
            style={
              {
                backgroundColor: color4,
                width: 120,
                height: 120
              }
            }>
          </View>

        </TouchableOpacity>

      </View>

    </View>
  );
}

function Lab3Screen() {
  return (
    <View style={
      { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
      }
    }>
      <Text>Lab3</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {

  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab2" component={Lab2Screen} />
        <Tab.Screen name="Lab3" component={Lab3Screen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
  
};

const styles = StyleSheet.create({

  blockRow: {
    flexDirection: 'row',
  },

  
});

export default App;
