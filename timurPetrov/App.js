import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';

export default function App() {
  /*state = {
    name: '',
  }*/
  const [name, setName] = useState("")
    return (
      <View>
        <TextInput 
          onChangeText={text => setName(text)}
          value={name}
          placeholder="enter here"
        />
      </View>
    );
 }    
