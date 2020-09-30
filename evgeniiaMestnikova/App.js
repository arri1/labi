/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';

const App= () => {
  const [backgroundColor, setBackgroungColor] = useState('yellow')

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((item, index) => {
          return(
            <TouchableOpacity
              key={index}
              style={[styles.item, {backgroundColor}]}
              onPress={() => {
                setBackgroungColor(item.backgroundColor)
              }}
            >
              <Text style={{color: item.backgroundColor}}>
                {item.backgroundColor}
              </Text>
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
    height: 600
  },
  item: {
    flex: 1,
    minHeight: 200,
    borderRadius: 20,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const data = [
  {
    backgroundColor: 'red'
  },
  {
    backgroundColor: 'green'
  },
  {
    backgroundColor: 'blue'
  },
  {
    backgroundColor: 'pink'
  },
  {
    backgroundColor: 'black'
  }
]
export default App;
