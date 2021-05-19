import React, {
  useState,
  useEffect,
  Component 
} from 'react';

import { 
  View, 
  Image,
} from 'react-native';

import {Input} from 'react-native-elements';

const cat =() =>{
  const [code, setCode] = React.useState('100')
  const [status, setStatus] = React.useState(null)

  useEffect(()=>{
    if (code.length >=3){
      setStatus(code)
    }
  }, [code])

	return (
		<View style={{
      flex: 1,
      backgroundColor: 'whitesmoke',
      justifyContent: 'center',
      alignItems: 'center'}}
    >
      <Input
        value={code}
        onChangeText={(value)=>setCode(value)}
        label="HTTP код"
        placeholder="Введите HTTP код"
      />
      {status ? <Image style={{width: 300, height: 300, marginTop: 30, }} source={{uri: `https://http.cat/${status}`}}/>:null} 
    </View>
	)
}

export default cat;